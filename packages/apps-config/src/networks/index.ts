// Copyright 2017-2025 @polkadot/apps-config and @PolkaGate/apps-configs authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { knownGenesis } from './genesis.js';
import { knownIcon } from './icons.js';
import knownSubstrate, { RegistryEntry } from './knownSubstrate.js';
import { knownLedger } from './ledger.js';
import { knownTestnet } from './testnets.js';
import { SubstrateNetwork } from './types.js';
const UNSORTED = [0, 2, 42];
function toExpanded(o: RegistryEntry) {
    const network = o.network || '';
    const n = o as unknown as SubstrateNetwork;
    // ledger additions
    n.slip44 = knownLedger[network];
    n.hasLedgerSupport = !!n.slip44;
    // general items
    n.genesisHash = knownGenesis[network] || [];
    n.icon = knownIcon[network] || 'substrate';
    // filtering
    const isTestNetByName = network.toLowerCase().includes('testnet');
    n.isTestnet = !!knownTestnet[network] || isTestNetByName;
    n.isIgnored =!(o.standardAccount &&
        o.decimals && o.decimals.length &&
        o.symbols && o.symbols.length);
    return n;
}
function filterSelectable({ genesisHash, prefix }:SubstrateNetwork) {
    return !!genesisHash.length || prefix === 42;
}
function filterAvailable(n: SubstrateNetwork) {
    return !n.isIgnored && !!n.network;
}
function sortNetworks(a: SubstrateNetwork, b: SubstrateNetwork) {
    const isUnSortedA = UNSORTED.includes(a.prefix);
    const isUnSortedB = UNSORTED.includes(b.prefix);
    return isUnSortedA === isUnSortedB
        ? isUnSortedA
            ? 0
            : a.displayName.localeCompare(b.displayName)
        : isUnSortedA
            ? -1
            : 1;
}

export const allNetworks = knownSubstrate.map(toExpanded);
export const availableNetworks = allNetworks.filter(filterAvailable).sort(sortNetworks);
export const selectableNetworks = availableNetworks.filter(filterSelectable);
