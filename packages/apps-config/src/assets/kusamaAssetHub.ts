// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { assetsBillCoinSVG, assetsRmrkSVG, assetsTetherUsdtSVG } from '../ui/logos/assets/index.js';
import { chainsKusamaSVG } from '../ui/logos/chains/generated/kusamaSVG.js';

export const kusamaAssetHub: Asset[] = [
  {
    id: -1, // for native token
    symbol: 'KSM',
    decimal: 12,
    priceId: 'kusama',
    ui: {
      color: '#000',
      logo: chainsKusamaSVG,
      subLogo: true
    },
    extras: {
      isNative: true
    }
  },
  {
    id: 8,
    symbol: 'RMRK',
    decimal: 10,
    priceId: 'rmrk',
    homepage: 'https://www.rmrk.app/',
    text: 'Remark',
    ui: {
      color: '#e93289',
      logo: assetsRmrkSVG,
      subLogo: true
    }
  },
  {
    id: 223,
    symbol: 'BILLCOIN',
    decimal: 8,
    type: 'statemine',
    ui: {
      color: '#000',
      logo: assetsBillCoinSVG,
      subLogo: true
    }
  },
  {
    id: 1984,
    symbol: 'USDt',
    decimal: 6,
    priceId: 'tether',
    homepage: 'https://tether.to',
    text: 'USD Tether',
    ui: {
      color: '#1bde87',
      logo: assetsTetherUsdtSVG,
      subLogo: true
    }
  }
];
