// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from '../types.js';

import { assetsBillcoinSVG, assetsPolkagateSVG, assetsWndSVG } from '../../ui/logos/assets/index.js';
import { squareBillSVG, squareWestendTestnetSVG } from '../../ui/logos/square/index.js';

export const westendAssetHub: Asset[] = [
  {
    id: -1, // for native token
    symbol: 'WND',
    decimal: 12,
    ui: {
      color: '#da68a7',
      logo: assetsWndSVG,
      logoSquare: squareWestendTestnetSVG,
      subLogo: true
    },
    extras: {
      isNative: true
    }
  },
  {
    id: 6,
    symbol: 'BILL',
    decimal: 8,
    text: 'BILLCOIN',
    ui: {
      color: '#000',
      logo: assetsBillcoinSVG,
      logoSquare: squareBillSVG,
      subLogo: true
    }
  },
  {
    id: 1010,
    symbol: 'POL',
    decimal: 8,
    text: 'PolkaGate',
    ui: {
      color: '#E6007A',
      logo: assetsPolkagateSVG,
      logoSquare: assetsPolkagateSVG,
      subLogo: true
    }
  }
];
