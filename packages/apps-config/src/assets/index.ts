// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Asset } from './types.js';

import { acala } from './substrate/acala.js';
import { hydration } from './substrate/hydration.js';
import { kusamaAssetHub } from './substrate/kusamaAssetHub.js';
import { paseoAssetHub } from './substrate/paseoAssetHub.js';
import { polkadotAssetHub } from './substrate/polkadotAssetHub.js';
import { westendAssetHub } from './substrate/westendAssetHub.js';
import { erc20Assets } from './evm/assets.js';
import { ERC20Asset } from './evm/types.js';

export function createAssets(): Record<string, Asset[]> {
  return {
    acala,
    hydration,
    kusamaAssetHub,
    paseoAssetHub,
    polkadotAssetHub,
    westendAssetHub
  };
}

export function createErc20Assets(): ERC20Asset[] {
  return erc20Assets;
}
