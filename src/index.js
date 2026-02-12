#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const MACS_FILE = path.resolve(__dirname, '..', 'macs.txt');
const OUT_FILE = path.resolve(process.cwd(), 'results.md');

function tryRequire(name) {
  try {
    return require(name);
  } catch (e) {
    return null;
  }

}

async function loadPackage(name) {
  // try require first (CommonJS)
  try {
    return require(name);
  } catch (e) {
    // try dynamic import for ESM packages
    try {
      const mod = await import(name);
      return mod;
    } catch (ie) {
      return null;
    }
  }
}

async function callLookup(mod, mac) {
  if (!mod) return 'not-installed';
  // special-case oui data map
  if (mod && mod.__oui_data__) {
    const map = mod.__oui_data__;
    const key = mac.toUpperCase().replace(/[:-]/g,'').substring(0,6);
    const v = map[key];
    return v ? String(v).split('\n')[0] : '<unknown>';
  }
  try {
    const tried = new Set();
    const targets = [];
    // try module itself and default export if present
    targets.push(mod);
    if (mod && mod.default) targets.push(mod.default);

    const methodNames = ['toVendor', 'getVendor', 'lookup', 'get', 'vendor', 'oui', 'resolve', 'find', 'search', 'parse'];

    for (const target of targets) {
      if (!target) continue;

      // if target is a function, call it
      if (typeof target === 'function' && !tried.has(target)) {
        tried.add(target);
        try {
          const r = target(mac);
          const val = r instanceof Promise ? await r : r;
          if (val === null) return '<unknown>';
          const extracted = extractString(val);
          if (extracted !== null && extracted !== undefined) return extracted;
        } catch (e) {}
      }

      // try known method names on the target
      for (const name of methodNames) {
        if (typeof target[name] === 'function' && !tried.has(target[name])) {
          tried.add(target[name]);
          try {
            const r = target[name](mac);
            const val = r instanceof Promise ? await r : r;
            if (val === null) return '<unknown>';
            const extracted = extractString(val);
            if (extracted !== null && extracted !== undefined) return extracted;
          } catch (e) {}
        }
      }

      // try direct property lookup (some modules expose maps)
      try {
        const key = mac.toUpperCase().replace(/[:-]/g,'');
        if (target[key]) {
          const val = target[key];
          if (val === null) return '<unknown>';
          const extracted = extractString(val);
          if (extracted !== null && extracted !== undefined) return extracted;
        }
      } catch (e) {}
    }

    // last resort: inspect object for obvious vendor-like fields
    if (typeof mod === 'object') {
      const candidateFields = ['vendor','company','organization','organisation','manufacturer','name'];
      for (const t of targets) {
        if (!t || typeof t !== 'object') continue;
        for (const f of candidateFields) {
          if (t[f]) return String(t[f]);
        }
      }
      // fallback: return a short module summary
      const keys = Object.keys(mod).slice(0,6);
      return `{module: ${keys.join(', ')}}`;
    }

    return 'no-result';
  } catch (e) {
    return `error: ${e.message}`;
  }
}

function extractString(val) {
  if (val == null) return null;
  if (typeof val === 'string') return val;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (typeof val === 'object') {
    // common vendor fields
    for (const k of ['vendor','company','organization','organisation','manufacturer','name']) {
      if (val[k]) return String(val[k]);
    }
    // sometimes the module returns a string-like default
    if (val.toString && typeof val.toString === 'function') {
      const s = val.toString();
      if (s && s !== '[object Object]') return s;
    }
    return null;
  }
  return null;

}

async function main() {
  const macsRaw = fs.readFileSync(MACS_FILE, 'utf8').split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  const macs = Array.from(new Set(macsRaw));

  const packages = {
    'vendor-lookup': await loadPackage('@network-utils/vendor-lookup'),
    'oui': await loadPackage('oui'),
    'mac-oui-lookup': await loadPackage('mac-oui-lookup')
  };

  // if `oui` CLI package doesn't export a library API, fallback to `oui-data` JSON map
  if (!packages['oui']) {
    const ouiData = await loadPackage('oui-data');
    if (ouiData) packages['oui'] = { __oui_data__: ouiData };
  }

  const header = ['| MAC | @network-utils/vendor-lookup | oui | mac-oui-lookup |', '|---|---:|---:|---:|'].join('\n');
  const rows = [header];

  for (const mac of macs) {
    const cleaned = mac.trim();
    const results = {};
    for (const [k, mod] of Object.entries(packages)) {
      const r = await callLookup(mod, cleaned);
      results[k] = r;
    }
    rows.push(`| ${cleaned} | ${escapePipe(results['vendor-lookup'])} | ${escapePipe(results['oui'])} | ${escapePipe(results['mac-oui-lookup'])} |`);
  }

  const out = `# MAC vendor lookup comparison\n\nGenerated: ${new Date().toISOString()}\n\n${rows.join('\n')}`;
  fs.writeFileSync(OUT_FILE, out, 'utf8');
  console.log(`Wrote results to ${OUT_FILE}`);
}

function escapePipe(s){
  if (s == null) return '';
  return String(s).replace(/\|/g, '\\|');
}

main().catch(err => { console.error(err); process.exit(1); });
