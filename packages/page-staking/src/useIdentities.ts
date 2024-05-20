// Copyright 2017-2024 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveHasIdentity } from '@polkadot/api-derive/types';

import { createNamedHook } from '@polkadot/react-hooks';

type Result = Record<string, DeriveHasIdentity>;

function useIdentitiesImpl (_validatorIds: string[] = []): Result | undefined {
  const allIdentity = undefined//useCall<Result>(api.derive.accounts.hasIdentityMulti, [validatorIds], OPT_CALL);

  return allIdentity;
}

export default createNamedHook('useIdentities', useIdentitiesImpl);
