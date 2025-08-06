// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Asset } from './types.js';

import { chainsPaseoPNG } from '../ui/logos/chains/generated/paseoPNG.js';
import { squarePaseoTestnetSVG } from '../ui/logos/square/index.js';

export const paseoAssetHub: Asset[] = [
  {
    id: -1, // for native token
    symbol: 'PAS',
    decimal: 10,
    ui: {
      color: '#77bb77',
      logo: chainsPaseoPNG,
      logoSquare: squarePaseoTestnetSVG,
      subLogo: true
    },
    extras: {
      isNative: true
    }
  }
];
