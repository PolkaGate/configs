// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

 type AssetIds = Record<string, number>;

interface AssetUI {
  color: string;
  logo: string;
}

export interface Asset {
  decimal: number;
  homepage?: string;
  priceId?: string;
  symbol: string;
  text?: string;
  ui: AssetUI;
  id: number,
  type?: 'orml'|'statemine',
  extras?: Record<string, any>
}
