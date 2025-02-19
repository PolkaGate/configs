// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

interface AssetUI {
  color: string;
  logo: string;
  logoSquare?: string;
  subLogo?: boolean;
}

export interface Asset {
  decimal: number;
  extras?: Record<string, any>
  homepage?: string;
  id: number | string,
  isForeign?: boolean;
  priceId?: string;
  symbol: string;
  text?: string;
  type?: 'orml' | 'statemine',
  ui: AssetUI;
}
