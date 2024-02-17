// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Asset } from './types.js';

import { assetsTetherUsdtSVG, assetsUsdCoinUsdcSVG } from '../ui/logos/assets/index.js';

export const whitelistedAssets: Asset[] = [
  {
    decimal: 6,
    homepage: 'https://tether.to',
    ids:
    {
      astar: 4294969280,
      parallel: 102,
      polkadotAssetHub: 1984
    },
    priceId: 'tether',
    symbol: 'USDt',
    text: 'USD Tether',
    ui: {
      color: '#1bde87',
      logo: assetsTetherUsdtSVG
    }
  },
  {
    decimal: 6,
    homepage: 'https://www.circle.com',
    ids:
    {
      polkadotAssetHub: 1337
    },
    priceId: 'usd-coin',
    symbol: 'USDC',
    text: 'USD Coin',
    ui: {
      color: '#370afd',
      logo: assetsUsdCoinUsdcSVG
    }
  }
];
