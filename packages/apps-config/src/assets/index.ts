// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Asset } from './types.js';

import { acala } from './acala.js';
import { hydration } from './hydration.js';
import { kusamaAssetHub } from './kusamaAssetHub.js';
import { paseoAssetHub } from './paseoAssetHub.js';
import { polkadotAssetHub } from './polkadotAssetHub.js';
import { westendAssetHub } from './westendAssetHub.js';

export function createAssets (): Record<string, Asset[]> {
  return {
    acala,
    hydration,
    kusamaAssetHub,
    paseoAssetHub,
    polkadotAssetHub,
    westendAssetHub
  };
}
