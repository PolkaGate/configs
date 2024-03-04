// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { assetsTetherUsdtSVG, assetsUsdCoinUsdcSVG } from '../ui/logos/assets/index.js';
import { chainsPolkadotCircleSVG } from '../ui/logos/chains/generated/polkadot-circleSVG.js';

export const polkadotAssetHub: Asset[] = [
  {
    id: -1, // for native token
    symbol: 'DOT',
    decimal: 10,
    priceId: 'polkadot',
    ui: {
      color: '#de0377',
      logo: chainsPolkadotCircleSVG,
    },
    extras: {
      isNative: true
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
  },
  {
    id: 1337,
    symbol: 'USDC',
    decimal: 6,
    priceId: 'usd-coin',
    homepage: 'https://www.circle.com',
    text: 'USD Coin',
    ui: {
      color: '#370afd',
      logo: assetsUsdCoinUsdcSVG,
      subLogo: true
    }
  }
];
