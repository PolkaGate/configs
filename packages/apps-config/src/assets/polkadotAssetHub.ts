// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { assetsBillCoinSVG, assetsDedPNG, assetsMythPNG, assetsPinkPNG, assetsTetherUsdtSVG, assetsUsdCoinUsdcSVG } from '../ui/logos/assets/index.js';
import { chainsPolkadotCircleSVG } from '../ui/logos/chains/generated/polkadot-circleSVG.js';
import { squareBillSVG, squareKusamaSVG, squareMythSVG, squarePolkadotSVG, squareTetherSVG, squareUsdcSVG } from '../ui/logos/square/index.js';
import { chainsKusamaSVG } from '../ui/logos/chains/generated/kusamaSVG.js';

export const polkadotAssetHub: Asset[] = [
  {
    id: -1, // for native token
    symbol: 'DOT',
    decimal: 10,
    priceId: 'polkadot',
    ui: {
      color: '#de0377',
      logo: chainsPolkadotCircleSVG,
      logoSquare: squarePolkadotSVG,
      subLogo: true
    },
    extras: {
      isNative: true
    }
  },
  {
    id: 23,
    symbol: 'PINK',
    decimal: 10,
    priceId: '',
    homepage: 'https://dotispink.xyz',
    ui: {
      color: '#e54391',
      logo: assetsPinkPNG,
      logoSquare: assetsPinkPNG,
      subLogo: true
    }
  },
  {
    id: 30,
    symbol: 'DED',
    decimal: 10,
    priceId: 'dot-is-ded',
    homepage: 'https://www.dotisded.io',
    ui: {
      color: '#ff007a',
      logo: assetsDedPNG,
      logoSquare: assetsDedPNG,
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
      logoSquare: squareUsdcSVG,
      subLogo: true
    }
  },
  {
    id: 50000075,
    symbol: 'BILL',
    decimal: 12,
    priceId: '',
    text: 'BILLCOIN',
    ui: {
      color: '#000',
      logo: assetsBillCoinSVG,
      logoSquare: squareBillSVG,
      subLogo: true
    }
  },
  {
    id: '0x7b22706172656e7473223a312c22696e746572696f72223a7b227831223a7b2270617261636861696e223a333336397d7d7d',
    isForeign: true,
    symbol: 'MYTH',
    decimal: 18,
    priceId: 'mythos',
    homepage: 'https://mythos.foundation/',
    ui: {
      color: '#fd1212',
      logo: assetsMythPNG,
      logoSquare: squareMythSVG,
      subLogo: true
    }
  },
  {
    id: '0x02010903',
    isForeign: true,
    symbol: 'KSM',
    decimal: 12,
    priceId: 'kusama',
    homepage: 'https://kusama.network/',
    ui: {
      color: '#000',
      logo: chainsKusamaSVG,
      logoSquare: squareKusamaSVG,
      subLogo: true
    }
  }
];
