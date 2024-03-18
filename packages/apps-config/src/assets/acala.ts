// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { assetsASEEDSVG, assetsBtcSVG, assetsDaiSVG, assetsGlmrSVG, assetsLcDotSVG, assetsLDotSVG, assetsTetherUsdtSVG } from '../ui/logos/assets/index.js';
import { chainsAcalaSVG, chainsEquilibriumSVG, chainsPolkadotCircleSVG } from '../ui/logos/chains/index.js';
import { nodesAstarPNG } from '../ui/logos/nodes/generated/astarPNG.js';
import { nodesInterlaySVG } from '../ui/logos/nodes/generated/interlaySVG.js';
import { nodesParallelSVG } from '../ui/logos/nodes/generated/parallelSVG.js';

export const acala: Asset[] = [
  {
    id: 0,
    decimal: 12,
    symbol: 'ACA',
    priceId: 'acala',
    ui: {
      color: '#d34263',
      logo: chainsAcalaSVG
    }
  },
  {
    id: 1,
    symbol: 'LDOT',
    decimal: 10,
    priceId: 'liquid-staking-dot',
    type: 'orml',
    ui: {
      color: '#de037869',
      logo: assetsLDotSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0003',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '500000000',
      transfersEnabled: true
    }
  },
  {
    id: 2,
    symbol: 'aSEED',
    decimal: 12,
    priceId: 'ausd-seed-acala',
    type: 'orml',
    ui: {
      color: '#d80f61',
      logo: assetsASEEDSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0001',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000000',
      transfersEnabled: true
    }
  },
  {
    id: 3,
    symbol: 'DOT',
    decimal: 10,
    priceId: 'polkadot',
    type: 'orml',
    ui: {
      color: 'rgb(223, 134, 229)',
      logo: chainsPolkadotCircleSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0002',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000',
      transfersEnabled: true
    }
  },
  {
    id: 4,
    symbol: 'lcDOT',
    decimal: 10,
    priceId: 'polkadot',
    type: 'orml',
    ui: {
      color: '#6c3d67',
      logo: assetsLcDotSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x040d000000',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000',
      transfersEnabled: true
    }
  },
  {
    id: 5,
    symbol: 'GLMR',
    decimal: 18,
    priceId: 'moonbeam',
    type: 'orml',
    ui: {
      color: '#21bad5',
      logo: assetsGlmrSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050000',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 6,
    symbol: 'PARA',
    decimal: 12,
    priceId: 'parallel-finance',
    type: 'orml',
    ui: {
      color: '#0db6f5',
      logo: nodesParallelSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050100',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000000',
      transfersEnabled: true
    }
  },
  {
    id: 7,
    symbol: 'TAP',
    decimal: 12,
    type: 'orml',
    ui: {
      color: '#1bde87',
      logo: '',
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0004',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '1000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 8,
    symbol: 'tDOT',
    decimal: 10,
    type: 'orml',
    ui: {
      color: '#be1bde41',
      logo: chainsPolkadotCircleSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0300000000',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000',
      transfersEnabled: true
    }
  },
  {
    id: 9,
    symbol: 'INTR',
    decimal: 10,
    type: 'orml',
    priceId: 'interlay',
    ui: {
      color: '#190a2c',
      logo: nodesInterlaySVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050400',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '1000000000',
      transfersEnabled: true
    }
  },
  {
    id: 10,
    symbol: 'ASTR',
    decimal: 18,
    type: 'orml',
    priceId: 'astar',
    ui: {
      color: '#058ef3',
      logo: nodesAstarPNG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050200',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100000000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 11,
    symbol: 'EQ',
    decimal: 9,
    priceId: 'equilibrium-token',
    type: 'orml',
    ui: {
      color: '#a0d1f3',
      logo: chainsEquilibriumSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050700',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '1000000000',
      transfersEnabled: true
    }
  },
  {
    id: 12,
    symbol: 'iBTC',
    decimal: 8,
    type: 'orml',
    priceId: 'bitcoin',
    ui: {
      color: '#ded81b',
      logo: assetsBtcSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050300',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '100',
      transfersEnabled: true
    }
  },
  {
    id: 13,
    symbol: 'DAI',
    decimal: 18,
    type: 'orml',
    priceId: 'dai',
    ui: {
      color: '#f2ac26',
      logo: assetsDaiSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x0254a37a01cd75b616d63e0ab665bffdb0143c52ae',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '10000000000000000',
      transfersEnabled: true
    }
  },
  {
    id: 14,
    symbol: 'USDT',
    decimal: 6,
    type: 'orml',
    priceId: 'tether',
    ui: {
      color: '#249c76',
      logo: assetsTetherUsdtSVG,
      subLogo: true
    },
    extras: {
      currencyIdScale: '0x050c00',
      currencyIdType: 'acala_primitives.currency.CurrencyId',
      existentialDeposit: '10000',
      transfersEnabled: true
    }
  }
];
