// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { assetsBillCoinSVG, assetsRmrkSVG, assetsTetherUsdtSVG } from '../ui/logos/assets/index.js';
import { chainsKusamaSVG } from '../ui/logos/chains/generated/kusamaSVG.js';
import { squareBillSVG, squareKusamaSVG, squareRemarkSVG, squareTetherSVG } from '../ui/logos/square/index.js';

export const kusamaAssetHub: Asset[] = [
  {
    id: -1, // for native token
    symbol: 'KSM',
    decimal: 12,
    priceId: 'kusama',
    ui: {
      color: '#000',
      logo: chainsKusamaSVG,
      logoSquare: squareKusamaSVG,
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
      logoSquare: squareRemarkSVG,
      subLogo: true
    }
  },
  {
    id: 223,
    symbol: 'BILL',
    decimal: 8,
    text: 'BILLCOIN',
    ui: {
      color: '#000',
      logo: assetsBillCoinSVG,
      logoSquare: squareBillSVG,
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
      logoSquare: squareTetherSVG,
      subLogo: true
    }
  }
];
