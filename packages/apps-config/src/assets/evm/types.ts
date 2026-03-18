// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AssetUI } from "../types.js";

type ProviderConfig = {
  blockchain?: string;
  coinType?: string;
  network?: string;
};

type Providers = {
  banxa?: ProviderConfig;
  mercuryo?: ProviderConfig;
  transak?: ProviderConfig;
};

type ERC20Instance = {
  buyProviders?: Providers;
  chainId: string;
  contractAddress: string;
  sellProviders?: Providers;
};

export type ERC20Asset = {
  decimal: number;
  priceId?: string;
  instances: ERC20Instance[];
  symbol: string;
  text: string;
  ui: AssetUI;
};