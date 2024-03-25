// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { assetsDaiSVG, assetsEthSVG, assetsTetherUsdtSVG, assetsUsdCoinUsdcSVG, assetsWbtcSVG } from '../ui/logos/assets/index.js';
import { chainsPolkadotCircleSVG, chainsSnakenetSVG } from '../ui/logos/chains/index.js';
import { nodesAstarPNG, nodesBifrostSVG, nodesCentrifugePNG, nodesInterlaySVG, nodesMoonbeamSVG, nodesPhalaSVG, nodesSubsocialSVG, nodesZeitgeistPNG } from '../ui/logos/nodes/index.js';

export const hydraDx: Asset[] = [
  {
    id: 0,
    decimal: 12,
    symbol: 'HDX',
    priceId: 'hydradx',
    ui: {
      color: '#f051a0',
      logo: chainsSnakenetSVG
    }
  },
  {
    id: 1,
    symbol: 'DOT',
    decimal: 10,
    priceId: 'polkadot',
    type: 'orml',
    ui: {
      color: '#de0377',
      logo: chainsPolkadotCircleSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x05000000',
      currencyIdType: 'u32',
      existentialDeposit: '17540000',
      transfersEnabled: true
    }
  },
  {
    id: 2,
    symbol: 'DAI-Acala',
    decimal: 18,
    priceId: 'dai',
    type: 'orml',
    ui: {
      color: '#f2ac21',
      logo: assetsDaiSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x02000000',
      currencyIdType: 'u32',
      existentialDeposit: '10000000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 3,
    symbol: 'WETH-Acala',
    decimal: 18,
    priceId: 'ethereum-wormhole',
    type: 'orml',
    ui: {
      color: '#de396c',
      logo: assetsEthSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x04000000',
      currencyIdType: 'u32',
      existentialDeposit: '7000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 4,
    symbol: 'WBTC-Acala',
    decimal: 8,
    priceId: 'wrapped-bitcoin',
    type: 'orml',
    ui: {
      color: '#fbcc5f',
      logo: assetsWbtcSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x03000000',
      currencyIdType: 'u32',
      existentialDeposit: '44',
      transfersEnabled: true
    }
  },
  {
    id: 5,
    symbol: 'iBTC',
    decimal: 8,
    priceId: 'bitcoin',
    type: 'orml',
    ui: {
      color: '#eca77b',
      logo: nodesInterlaySVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0b000000',
      currencyIdType: 'u32',
      existentialDeposit: '36',
      transfersEnabled: true
    }
  },
  {
    id: 6,
    symbol: 'ZTG',
    decimal: 10,
    priceId: 'zeitgeist',
    type: 'orml',
    ui: {
      color: '#161f24',
      logo: nodesZeitgeistPNG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0c000000',
      currencyIdType: 'u32',
      existentialDeposit: '1204151916',
      transfersEnabled: true
    }
  },
  {
    id: 7,
    symbol: 'ASTR',
    decimal: 18,
    priceId: 'astar',
    type: 'orml',
    ui: {
      color: '#04abc5',
      logo: nodesAstarPNG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x09000000',
      currencyIdType: 'u32',
      existentialDeposit: '147058823529412000',
      transfersEnabled: true
    }
  },
  {
    id: 8,
    symbol: 'USDT',
    decimal: 6,
    priceId: 'tether',
    type: 'orml',
    ui: {
      color: '#1bde87',
      logo: assetsTetherUsdtSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0a000000',
      currencyIdType: 'u32',
      existentialDeposit: '10000',
      transfersEnabled: true
    }
  },
  {
    id: 9,
    symbol: 'CFG',
    decimal: 18,
    priceId: 'centrifuge',
    type: 'orml',
    ui: {
      color: '#255ff7',
      logo: nodesCentrifugePNG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0d000000',
      currencyIdType: 'u32',
      existentialDeposit: '32467532467532500',
      transfersEnabled: true
    }
  },
  {
    id: 10,
    symbol: 'BNC',
    decimal: 12,
    priceId: 'bifrost-native-coin',
    type: 'orml',
    ui: {
      color: '#E65659',
      logo: nodesBifrostSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0e000000',
      currencyIdType: 'u32',
      existentialDeposit: '68795189840',
      transfersEnabled: true
    }
  },
  {
    id: 11,
    symbol: 'DAI-Moonbeam',
    decimal: 18,
    priceId: 'dai',
    type: 'orml',
    ui: {
      color: '#f2ac21',
      logo: assetsDaiSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x12000000',
      currencyIdType: 'u32',
      existentialDeposit: '10000000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 12,
    symbol: 'WBTC-Moonbeam',
    decimal: 8,
    priceId: 'wrapped-bitcoin',
    type: 'orml',
    ui: {
      color: '#f2ac21',
      logo: assetsWbtcSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x13000000',
      currencyIdType: 'u32',
      existentialDeposit: '34',
      transfersEnabled: true
    }
  },
  {
    id: 13,
    symbol: 'WETH-Moonbeam',
    decimal: 18,
    priceId: 'ethereum-wormhole',
    type: 'orml',
    ui: {
      color: '#e02470',
      logo: assetsEthSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x14000000',
      currencyIdType: 'u32',
      existentialDeposit: '7000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 14,
    symbol: 'USDC',
    decimal: 6,
    priceId: 'usd-coin',
    type: 'orml',
    ui: {
      color: '#2670c3',
      logo: assetsUsdCoinUsdcSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x16000000',
      currencyIdType: 'u32',
      existentialDeposit: '10000',
      transfersEnabled: true
    }
  },
  {
    id: 15,
    symbol: 'GLMR',
    decimal: 18,
    priceId: 'moonbeam',
    type: 'orml',
    ui: {
      color: '#1fb9d2',
      logo: nodesMoonbeamSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x10000000',
      currencyIdType: 'u32',
      existentialDeposit: '34854864344868000',
      transfersEnabled: true
    }
  },
  {
    id: 16,
    symbol: 'INTR',
    decimal: 10,
    priceId: 'interlay',
    type: 'orml',
    ui: {
      color: '#190a2c',
      logo: nodesInterlaySVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x11000000',
      currencyIdType: 'u32',
      existentialDeposit: '6164274209',
      transfersEnabled: true
    }
  },
  {
    id: 17,
    symbol: 'SUB',
    decimal: 10,
    priceId: 'subsocial',
    type: 'orml',
    ui: {
      color: '#190a2c',
      logo: nodesSubsocialSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x18000000',
      currencyIdType: 'u32',
      existentialDeposit: '20000000',
      transfersEnabled: true
    }
  },
  {
    id: 18,
    symbol: 'vDOT',
    decimal: 10,
    priceId: 'voucher-dot',
    type: 'orml',
    ui: {
      color: '#de0377',
      logo: chainsPolkadotCircleSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0f000000',
      currencyIdType: 'u32',
      existentialDeposit: '18761726',
      transfersEnabled: true
    }
  },
  {
    id: 19,
    symbol: 'PHA',
    decimal: 12,
    priceId: 'pha',
    type: 'orml',
    ui: {
      color: '#caf74f',
      logo: nodesPhalaSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x08000000',
      currencyIdType: 'u32',
      existentialDeposit: '54945054945',
      transfersEnabled: true
    }
  },
  {
    id: 20,
    symbol: 'USDC-Moonbeam',
    decimal: 6,
    priceId: 'usd-coin',
    type: 'orml',
    ui: {
      color: '#2670c3',
      logo: assetsUsdCoinUsdcSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x15000000',
      currencyIdType: 'u32',
      existentialDeposit: '10000',
      transfersEnabled: true
    }
  }
];
