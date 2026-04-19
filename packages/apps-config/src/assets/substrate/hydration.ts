// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from '../types.js';

import { assetsAstrSVG, assetsBillcoinSVG, assetsBncSVG, assetsCfgSVG, assetsDaiSVG, assetsDedSVG, assetsDotSVG, assetsEthSVG, assetsGlmrSVG, assetsHdxSVG, assetsIntrSVG, assetsNodlSVG, assetsPhaSVG, assetsPinkSVG, assetsSubSVG, assetsUsdcMoonbeamSVG, assetsUsdcSVG, assetsUsdtSVG, assetsWbtcSVG, assetsZtgSVG } from '../../ui/logos/assets/index.js';
import { squareAstarSVG, squareBifrostPolkadotSVG, squareBillSVG, squareBtcSVG, squareCentrifugeSVG, squareDaiSVG, squareEthereumSVG, squareHydraDXSVG, squareInterlaySVG, squareMoonbeamSVG, squareNodleSVG, squarePhalaSVG, squarePolkadotSVG, squareSubsocialParachainSVG, squareUsdcSVG, squareZeitgeistSVG } from '../../ui/logos/square/index.js';

export const hydration: Asset[] = [
  {
    id: 0,
    decimal: 12,
    symbol: 'HDX',
    priceId: 'hydration',
    ui: {
      color: '#f051a0',
      logo: assetsHdxSVG,
      logoSquare: squareHydraDXSVG
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
      logo: assetsDotSVG,
      logoSquare: squarePolkadotSVG,
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
      logoSquare: squareDaiSVG,
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
      logoSquare: squareEthereumSVG,
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
      logoSquare: squareBtcSVG,
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
      logo: assetsIntrSVG,
      logoSquare: squareInterlaySVG,
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
      logo: assetsZtgSVG,
      logoSquare: squareZeitgeistSVG,
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
      logo: assetsAstrSVG,
      logoSquare: squareAstarSVG,
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
      logo: assetsUsdtSVG,
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
      logo: assetsCfgSVG,
      logoSquare: squareCentrifugeSVG,
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
      logo: assetsBncSVG,
      logoSquare: squareBifrostPolkadotSVG,
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
      logoSquare: squareDaiSVG,
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
      logoSquare: squareBtcSVG,
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
      logoSquare: squareEthereumSVG,
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
      logo: assetsUsdcSVG,
      logoSquare: squareUsdcSVG,
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
      logo: assetsGlmrSVG,
      logoSquare: squareMoonbeamSVG,
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
      logo: assetsIntrSVG,
      logoSquare: squareInterlaySVG,
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
      logo: assetsSubSVG,
      logoSquare: squareSubsocialParachainSVG,
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
      logo: assetsDotSVG,
      logoSquare: squarePolkadotSVG,
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
      logo: assetsPhaSVG,
      logoSquare: squarePhalaSVG,
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
      logo: assetsUsdcMoonbeamSVG,
      logoSquare: squareUsdcSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x15000000',
      currencyIdType: 'u32',
      existentialDeposit: '10000',
      transfersEnabled: true
    }
  },
  {
    id: 21,
    symbol: 'NODL',
    decimal: 11,
    priceId: 'nodle-network',
    type: 'orml',
    ui: {
      color: '#000',
      logo: assetsNodlSVG,
      logoSquare: squareNodleSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x1a000000',
      currencyIdType: 'u32',
      existentialDeposit: '109890109890',
      transfersEnabled: true
    }
  },
  {
    id: 22,
    symbol: 'DED',
    decimal: 10,
    priceId: 'dot-is-ded',
    type: 'orml',
    ui: {
      color: '#ff007a',
      logo: assetsDedSVG,
      logoSquare: assetsDedSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x53420f00',
      currencyIdType: 'u32',
      existentialDeposit: '1',
      transfersEnabled: true
    }
  },
  {
    id: 23,
    symbol: 'PINK',
    decimal: 10,
    type: 'orml',
    ui: {
      color: '#e54391',
      logo: assetsPinkSVG,
      logoSquare: assetsPinkSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x55420f00',
      currencyIdType: 'u32',
      existentialDeposit: '1',
      transfersEnabled: true
    }
  },
  {
    id: 24,
    symbol: 'BILL',
    decimal: 12,
    type: 'orml',
    ui: {
      color: '#000',
      logo: assetsBillcoinSVG,
      logoSquare: squareBillSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x3a450f00',
      currencyIdType: 'u32',
      existentialDeposit: '1',
      transfersEnabled: true
    }
  }
];
