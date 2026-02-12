# npm-mac-lookup-compare

This repository compares output from three npm packages that perform OUI / MAC vendor lookups:

- `@network-utils/vendor-lookup`
- `oui`
- `mac-oui-lookup`

What it does

- Reads a list of MAC addresses from `macs.txt`.
- Attempts to resolve a vendor name for each MAC using each package (best-effort — the script tolerates packages not being installed or differing APIs).
- Writes a Markdown table into `results.md` with the raw outputs so you can inspect differences.

Usage

1. Install dependencies:

```bash
npm install
```

2. Run the comparison:

```bash
npm run compare
```

3. Open `results.md`

## Last Results

Generated: 2026-02-12T13:07:02.411Z

| MAC | @network-utils/vendor-lookup | oui | mac-oui-lookup |
|---|---:|---:|---:|
| 48:E0:FD:7F:6B:06 | <unknown> | <unknown> | <unknown> |
| C1:D6:D1:87:2C:EE | <unknown> | <unknown> | <unknown> |
| 39:FF:A5:2D:40:8C | <unknown> | <unknown> | <unknown> |
| 5A:3A:E3:01:94:B3 | <random MAC> | <unknown> | <unknown> |
| 26:6A:0E:87:76:84 | <random MAC> | <unknown> | <unknown> |
| 40:00:00:FC:04:D0 | <unknown> | <unknown> | <unknown> |
| D0:C2:4E:AF:32:76 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| E9:F0:9D:B5:DF:21 | <unknown> | <unknown> | <unknown> |
| 43:40:54:CB:BD:84 | <unknown> | <unknown> | <unknown> |
| D0:03:DF:BE:31:97 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 00:A0:50:18:A7:4F | CYPRESS SEMICONDUCTOR | CYPRESS SEMICONDUCTOR | CYPRESS SEMICONDUCTOR |
| 66:4B:C2:35:79:FF | <random MAC> | <unknown> | <unknown> |
| 6F:12:FD:2C:24:72 | <unknown> | <unknown> | <unknown> |
| 42:A6:F2:26:BF:2C | <random MAC> | <unknown> | <unknown> |
| 27:03:90:08:A2:16 | <unknown> | <unknown> | <unknown> |
| 54:26:3E:DF:AF:CA | <unknown> | <unknown> | <unknown> |
| 67:7D:93:48:3B:0C | <unknown> | <unknown> | <unknown> |
| 7B:4F:DE:AF:FE:C2 | <unknown> | <unknown> | <unknown> |
| 4D:E2:37:D1:8B:CA | <unknown> | <unknown> | <unknown> |
| 3C:96:EB:87:D9:AA | <unknown> | <unknown> | <unknown> |
| 48:9E:BD:89:18:E1 | HP Inc. | HP Inc. | HP Inc. |
| 00:C3:F4:E4:FC:3D | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| FC:03:9F:60:3D:C0 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 25:FE:E0:4A:3F:1A | <unknown> | <unknown> | <unknown> |
| F0:73:61:67:C1:B8 | <unknown> | <unknown> | <unknown> |
| 36:46:3B:D0:6D:F3 | <random MAC> | <unknown> | <unknown> |
| A0:B5:3C:B9:79:47 | Vantiva Technologies Belgium | Vantiva Technologies Belgium | Technicolor Delivery Technologies Belgium NV |
| 4C:57:39:F7:A3:81 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| D0:D0:03:EC:81:A9 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 69:EE:AC:D7:A5:25 | <unknown> | <unknown> | <unknown> |
| C0:28:8D:9B:7E:20 | Logitech, Inc | Logitech, Inc | Logitech, Inc |
| 67:F3:32:7B:C8:78 | <unknown> | <unknown> | <unknown> |
| 10:2B:41:35:81:93 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 46:D0:DA:9E:DE:84 | <random MAC> | <unknown> | <unknown> |
| 03:F0:03:5B:F0:A3 | <unknown> | <unknown> | <unknown> |
| 5E:30:FC:EA:89:32 | <random MAC> | <unknown> | <unknown> |
| 2E:3B:92:60:47:DE | <random MAC> | <unknown> | <unknown> |
| 4A:E3:56:99:69:9F | <random MAC> | <unknown> | <unknown> |
| D4:9D:C0:8E:5E:81 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| C0:97:27:62:8D:87 | SAMSUNG ELECTRO-MECHANICS(THAILAND) | SAMSUNG ELECTRO-MECHANICS(THAILAND) | SAMSUNG ELECTRO-MECHANICS(THAILAND) |
| 63:4A:FB:05:71:37 | <unknown> | <unknown> | <unknown> |
| CB:3A:66:F7:34:74 | <unknown> | <unknown> | <unknown> |
| 8C:79:F5:D7:10:31 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 53:91:2E:B4:C4:1F | <unknown> | <unknown> | <unknown> |
| 46:FE:A8:3A:C3:11 | <random MAC> | <unknown> | <unknown> |
| 19:24:DF:49:A9:62 | <unknown> | <unknown> | <unknown> |
| FD:70:2C:82:7F:C5 | <unknown> | <unknown> | <unknown> |
| 69:AB:36:E9:70:4C | <unknown> | <unknown> | <unknown> |
| CC:1C:E6:F6:7A:A3 | <unknown> | <unknown> | <unknown> |
| 1B:A8:63:52:6E:2D | <unknown> | <unknown> | <unknown> |
| 04:CB:01:56:07:A6 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 56:E7:55:26:20:69 | <random MAC> | <unknown> | <unknown> |
| E7:69:E4:47:7B:BF | <unknown> | <unknown> | <unknown> |
| 65:18:5A:EA:50:08 | <unknown> | <unknown> | <unknown> |
| 0C:3A:8C:9A:31:11 | <unknown> | <unknown> | <unknown> |
| F4:DD:24:79:49:7A | <unknown> | <unknown> | <unknown> |
| 98:80:BB:40:B1:36 | Shenzhen Ginto E-commerce CO.,LTD | IEEE Registration Authority | Shenzhen Ginto E-commerce CO.,LTD |
| 41:3D:8B:62:AB:6A | <unknown> | <unknown> | <unknown> |
| 58:79:47:58:40:8B | <unknown> | <unknown> | <unknown> |
| 40:D4:47:AE:28:90 | <unknown> | <unknown> | <unknown> |
| 09:4B:DA:CC:AC:47 | <unknown> | <unknown> | <unknown> |
| EA:12:B6:C7:14:62 | <random MAC> | <unknown> | <unknown> |
| 34:29:8F:EA:E7:B1 | ARC Technology Co., Ltd | IEEE Registration Authority | ARC Technology Co., Ltd |
| 59:AD:0C:7F:39:E5 | <unknown> | <unknown> | <unknown> |
| BC:7E:8B:AA:83:2D | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| C1:0A:04:3A:1F:D8 | <unknown> | <unknown> | <unknown> |
| FF:8E:3B:85:1E:A5 | <unknown> | <unknown> | <unknown> |
| E2:EC:AF:75:4D:7D | <random MAC> | <unknown> | <unknown> |
| 4A:83:A4:80:9F:4A | <random MAC> | <unknown> | <unknown> |
| FB:F6:39:67:A6:F8 | <unknown> | <unknown> | <unknown> |
| 78:CD:55:C6:50:EC | Texas Instruments | Texas Instruments | Texas Instruments |
| 32:77:F1:72:FC:54 | <random MAC> | <unknown> | <unknown> |
| 8C:59:DC:FD:EC:FD | ASR Microelectronics (Shanghai) Co., Ltd. | ASR Microelectronics (Shanghai) Co., Ltd. | ASR Microelectronics (Shanghai) Co., Ltd. |
| 65:57:C3:82:52:17 | <unknown> | <unknown> | <unknown> |
| E9:5C:03:55:04:65 | <unknown> | <unknown> | <unknown> |
| 71:57:A6:62:48:4A | <unknown> | <unknown> | <unknown> |
| D4:9D:C0:50:F2:89 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 88:57:1D:4A:0D:94 | Seongji Industry Company | Seongji Industry Company | Seongji Industry Company |
| FD:15:85:55:93:8C | <unknown> | <unknown> | <unknown> |
| E8:F4:2B:BB:86:02 | <unknown> | <unknown> | <unknown> |
| 4C:86:86:BB:D8:2C | <unknown> | <unknown> | <unknown> |
| 1F:DA:D5:B7:C6:67 | <unknown> | <unknown> | <unknown> |
| 45:6B:DC:99:E6:C1 | <unknown> | <unknown> | <unknown> |
| 64:66:C0:FB:3B:8B | <unknown> | <unknown> | <unknown> |
| C7:31:26:BD:1B:DB | <unknown> | <unknown> | <unknown> |
| 03:0C:15:AA:63:E6 | <unknown> | <unknown> | <unknown> |
| 5B:14:26:46:8B:04 | <unknown> | <unknown> | <unknown> |
| 41:2B:6D:27:64:48 | <unknown> | <unknown> | <unknown> |
| E6:AE:EB:A6:E4:C4 | <random MAC> | <unknown> | <unknown> |
| C6:70:45:C9:15:61 | <random MAC> | <unknown> | <unknown> |
| 4C:AC:7D:5B:99:F6 | <unknown> | <unknown> | <unknown> |
| EB:5F:2A:6A:1D:8F | <unknown> | <unknown> | <unknown> |
| 27:4C:00:22:2A:8D | <unknown> | <unknown> | <unknown> |
| 5C:C1:D7:53:64:81 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 5C:6F:5E:33:32:1B | <unknown> | <unknown> | <unknown> |
| 40:01:91:AC:8E:A1 | <unknown> | <unknown> | <unknown> |
| 00:1F:47:C3:09:47 | MCS Logic Inc. | MCS Logic Inc. | MCS Logic Inc. |
| 63:F7:E6:53:4A:B7 | <unknown> | <unknown> | <unknown> |
| 61:31:25:A3:08:92 | <unknown> | <unknown> | <unknown> |
| D4:92:5E:57:DE:D8 | Vantiva Technologies Belgium | Vantiva Technologies Belgium | Technicolor Delivery Technologies Belgium NV |
| D6:0D:EF:98:EC:A8 | <random MAC> | <unknown> | <unknown> |
| 5E:8C:3B:4B:82:71 | <random MAC> | <unknown> | <unknown> |
| 2B:FD:7E:AA:27:A9 | <unknown> | <unknown> | <unknown> |
| FD:38:8E:51:19:36 | <unknown> | <unknown> | <unknown> |
| F7:13:98:2A:03:59 | <unknown> | <unknown> | <unknown> |
| 61:6E:1B:4F:EB:0A | <unknown> | <unknown> | <unknown> |
| 5C:C1:D7:4D:ED:45 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| 70:CA:BD:33:61:67 | <unknown> | <unknown> | <unknown> |
| 05:9D:23:23:4B:67 | <unknown> | <unknown> | <unknown> |
| 26:14:82:81:0F:F4 | <random MAC> | <unknown> | <unknown> |
| 09:83:CA:1E:64:53 | <unknown> | <unknown> | <unknown> |
| CC:8C:BF:B4:1C:8F | Tuya Smart Inc. | Tuya Smart Inc. | Tuya Smart Inc. |
| 40:16:3B:EB:6F:55 | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd | Samsung Electronics Co.,Ltd |
| D0:C9:07:88:B4:57 | <private> | Private | Private |
| 40:EC:D7:07:72:BF | <unknown> | <unknown> | <unknown> |
| 6A:37:20:3F:B9:EF | <random MAC> | <unknown> | <unknown> |
| DE:21:29:47:C3:5E | <random MAC> | <unknown> | <unknown> |
| 15:DB:60:74:A4:7C | <unknown> | <unknown> | <unknown> |
| 72:CA:CA:9E:F1:5A | <random MAC> | <unknown> | <unknown> |
| 0D:78:B2:7D:FC:4E | <unknown> | <unknown> | <unknown> |
| 50:18:EB:5F:81:DB | <unknown> | <unknown> | <unknown> |
| 2B:3F:FE:53:20:B2 | <unknown> | <unknown> | <unknown> |
| 51:DB:66:4C:E8:4A | <unknown> | <unknown> | <unknown> |
| # Additional MACs added to expand vendor coverage | <unknown> | <unknown> | <unknown> |
| 00:1A:2B:3C:4D:5E | Ayecom Technology Co., Ltd. | Ayecom Technology Co., Ltd. | Ayecom Technology Co., Ltd. |
| 00:1B:63:84:45:E6 | Apple, Inc. | Apple, Inc. | Apple, Inc. |
| 00:1C:BF:12:34:56 | Intel Corporate | Intel Corporate | Intel Corporate |
| 00:1D:7E:AA:BB:CC | Cisco-Linksys, LLC | Cisco-Linksys, LLC | Cisco-Linksys, LLC |
| 00:1E:C2:9A:BC:DE | Apple, Inc. | Apple, Inc. | Apple, Inc. |
| 00:1F:3C:7D:8E:9F | Intel Corporate | Intel Corporate | Intel Corporate |
| 3C:5A:B4:12:34:56 | Google, Inc. | Google, Inc. | Google, Inc. |
| 3C:37:86:AA:BB:CC | NETGEAR | NETGEAR | NETGEAR |
| 5C:51:88:77:66:55 | Motorola Mobility LLC, a Lenovo Company | Motorola Mobility LLC, a Lenovo Company | Motorola Mobility LLC, a Lenovo Company |
| 5C:E3:AB:01:23:45 | <unknown> | <unknown> | <unknown> |
| 6C:40:08:12:34:56 | Apple, Inc. | Apple, Inc. | Apple, Inc. |
| 6C:72:E5:AA:BB:CC | <unknown> | <unknown> | <unknown> |
| 88:53:2E:AA:BB:CC | Intel Corporate | Intel Corporate | Intel Corporate |
| 88:1F:A1:12:34:56 | Apple, Inc. | Apple, Inc. | Apple, Inc. |
| A0:20:A6:12:34:56 | Espressif Inc. | Espressif Inc. | Espressif Inc. |
| A4:5E:60:12:34:56 | Apple, Inc. | Apple, Inc. | Apple, Inc. |
| B8:27:EB:AA:BB:CC | Raspberry Pi Foundation | Raspberry Pi Foundation | Raspberry Pi Foundation |
| B8:27:EB:11:22:33 | Raspberry Pi Foundation | Raspberry Pi Foundation | Raspberry Pi Foundation |
| DC:A6:32:12:34:56 | Raspberry Pi Trading Ltd | Raspberry Pi Trading Ltd | Raspberry Pi Trading Ltd |
| F0:9F:C2:AA:BB:CC | Ubiquiti Inc | Ubiquiti Inc | Ubiquiti Inc |
| FC:DB:B3:12:34:56 | Murata Manufacturing Co., Ltd. | Murata Manufacturing Co., Ltd. | Murata Manufacturing Co., Ltd. |
| 44:65:0D:12:34:56 | Amazon Technologies Inc. | Amazon Technologies Inc. | Amazon Technologies Inc. |
| 5C:49:79:12:34:56 | AVM Audiovisuelles Marketing und Computersysteme GmbH | AVM Audiovisuelles Marketing und Computersysteme GmbH | AVM Audiovisuelles Marketing und Computersysteme GmbH |
| 34:17:EB:12:34:56 | Dell Inc. | Dell Inc. | Dell Inc. |
| 50:C7:BF:12:34:56 | TP-LINK TECHNOLOGIES CO.,LTD. | TP-LINK TECHNOLOGIES CO.,LTD. | TP-LINK TECHNOLOGIES CO.,LTD. |
| 7C:6D:62:12:34:56 | Apple, Inc. | Apple, Inc. | Apple, Inc. |
| 9C:5C:8E:12:34:56 | ASUSTek COMPUTER INC. | ASUSTek COMPUTER INC. | ASUSTek COMPUTER INC. |
| D4:6A:6A:12:34:56 | Hon Hai Precision Ind. Co.,Ltd. | Hon Hai Precision Ind. Co.,Ltd. | Hon Hai Precision Ind. Co.,Ltd. |
| 58:6D:8F:12:34:56 | Cisco-Linksys, LLC | Cisco-Linksys, LLC | Cisco-Linksys, LLC |
| 70:85:C2:12:34:56 | ASRock Incorporation | ASRock Incorporation | ASRock Incorporation |
| 90:4C:E5:12:34:56 | Hon Hai Precision Ind. Co.,Ltd. | Hon Hai Precision Ind. Co.,Ltd. | Hon Hai Precision Ind. Co.,Ltd. |
| 44:8A:5B:12:34:56 | Micro-Star INT'L CO., LTD. | Micro-Star INT'L CO., LTD. | Micro-Star INT'L CO., LTD. |
| 00:0C:29:AA:BB:CC | VMware, Inc. | VMware, Inc. | VMware, Inc. |
| 00:50:56:AA:BB:CC | VMware, Inc. | VMware, Inc. | VMware, Inc. |
| 00:05:69:AA:BB:CC | VMware, Inc. | VMware, Inc. | VMware, Inc. |
| 02:42:AC:11:00:02 | <random MAC> | <unknown> | <unknown> |
| 52:54:00:12:34:56 | <random MAC> | <unknown> | <unknown> |
| 00:15:5D:12:34:56 | Microsoft Corporation | Microsoft Corporation | Microsoft Corporation |
| 00:16:3E:12:34:56 | Xensource, Inc. | Xensource, Inc. | Xensource, Inc. |
| 00:1C:10:12:34:56 | Cisco-Linksys, LLC | Cisco-Linksys, LLC | Cisco-Linksys, LLC |
| 00:14:22:12:34:56 | Dell Inc. | Dell Inc. | Dell Inc. |
| 00:21:70:12:34:56 | Dell Inc. | Dell Inc. | Dell Inc. |
| 00:24:E8:12:34:56 | Dell Inc. | Dell Inc. | Dell Inc. |
| 00:26:B9:12:34:56 | Dell Inc. | Dell Inc. | Dell Inc. |
| 00:40:96:12:34:56 | Cisco Systems, Inc | Cisco Systems, Inc | Cisco Systems, Inc |
| 00:80:92:12:34:56 | Silex Technology, Inc. | Silex Technology, Inc. | Silex Technology, Inc. |