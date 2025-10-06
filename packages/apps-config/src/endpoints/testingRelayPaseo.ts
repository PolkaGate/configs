// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { PASEO_GENESIS } from '../api/constants.js';
import { chainsFrequencyPaseoSVG, chainsLaosOmegaPNG, chainsPaseoPNG, chainsPopNetworkSVG } from '../ui/logos/chains/index.js';
import { nodesAjunaPNG, nodesBajunPNG, nodesBifrostSVG, nodesDarwiniaKoiSVG, nodesHyperbridgeSVG, nodesIntegriteeSVG, nodesKiltPNG, nodesNodleSVG, nodesPaseoAssetHubSVG } from '../ui/logos/nodes/index.js';
import { squareAjunaSVG, squareAssetHubTestnetSVG, squareBajunSVG, squareBifrostPolkadotSVG, squareDarwiniaSVG, squareFrequencySVG, squareHyperbridgeSVG, squareIntegriteeSVG, squareKiltPeregrineTestnetSVG, squareLaosSVG, squareNodleSVG, squarePaseoTestnetSVG } from '../ui/logos/square/index.js';
// import { testnetParachainSVG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasPaseo: Omit<EndpointOption, 'teleport'>[] = [
  // {
  //   homepage: 'https://testPaseoParachainExample.com',
  //   info: 'paseoparachain',
  //   paraId: 2345,
  //   providers: {
  //     Acurast: 'wss://paseo-parachain-testnet-ws.prod.gke.papers.tech'
  //   },
  //   text: 'Testnet Parachain',
  //   ui: {
  //     color: '#000000',
  //     logo: testnetParachainSVG
  //   }
  // }
  {
    homepage: 'https://ajuna.io/',
    info: 'Ajuna',
    paraId: 2051,
    providers: {
      BajunNetwork: 'wss://rpc-paseo.ajuna.network'
    },
    text: 'Ajuna Network',
    ui: {
      color: '#161212',
      logo: nodesAjunaPNG,
      logoSquare: squareAjunaSVG
    }
  },
  {
    homepage: 'https://ajuna.io/',
    info: 'Bajun',
    paraId: 2119,
    providers: {
      BajunNetwork: 'wss://rpc-paseo.bajun.network'
    },
    text: 'Bajun Network',
    ui: {
      color: '#161212',
      logo: nodesBajunPNG,
      logoSquare: squareBajunSVG
    }
  },
  {
    homepage: 'https://bifrost.finance',
    info: 'Bifrost',
    paraId: 2030,
    providers: {
      Liebi: 'wss://bifrost-rpc.paseo.liebi.com/ws'
    },
    text: 'Bifrost',
    ui: {
      color: '#5a25f0',
      logo: nodesBifrostSVG,
      logoSquare: squareBifrostPolkadotSVG
    }
  },
  {
    homepage: 'https://darwinia.network/',
    info: 'Darwinia Koi',
    paraId: 2105,
    providers: {
      Darwinia: 'wss://koi-rpc.darwinia.network'
    },
    text: 'Darwinia Koi',
    ui: {
      color: '#FF0083',
      logo: nodesDarwiniaKoiSVG,
      logoSquare: squareDarwiniaSVG
    }
  },
  {
    homepage: 'https://www.frequency.xyz',
    info: 'Frequency',
    paraId: 4000,
    providers: {
      'Amplica Labs': 'wss://0.rpc.testnet.amplica.io'
    },
    text: 'Frequency',
    ui: {
      color: '#19455E',
      logo: chainsFrequencyPaseoSVG,
      logoSquare: squareFrequencySVG
    }
  },
  {
    homepage: 'https://hyperbridge.network',
    info: 'Hyperbridge',
    paraId: 4009,
    providers: {
      BlockOps: 'wss://hyperbridge-paseo-rpc.blockops.network'
    },
    text: 'Hyperbridge (Gargantua)',
    ui: {
      color: '#ED6FF1',
      logo: nodesHyperbridgeSVG,
      logoSquare: squareHyperbridgeSVG
    }
  },
  {
    homepage: 'https://integritee.network',
    info: 'integritee',
    paraId: 2039,
    providers: {
      Integritee: 'wss://paseo.api.integritee.network'
    },
    text: 'Integritee Network',
    ui: {
      color: '#658ea9',
      logo: nodesIntegriteeSVG,
      logoSquare: squareIntegriteeSVG
    }
  },
  {
    info: 'kilt',
    paraId: 2086,
    providers: {
      BOTLabs: 'wss://peregrine.kilt.io/'
    },
    text: 'KILT Peregrine',
    ui: {
      color: 'linear-gradient(45deg, #f05a27 0%, #8c145a 100%)',
      logo: nodesKiltPNG,
      logoSquare: squareKiltPeregrineTestnetSVG
    }
  },
  {
    homepage: 'https://laosnetwork.io/',
    info: 'laos-omega',
    paraId: 4006,
    providers: {
      'freeverse.io': 'wss://rpc.laosomega.laosfoundation.io'
    },
    text: 'Laos Omega',
    ui: {
      color: '#f7f4e7',
      logo: chainsLaosOmegaPNG,
      logoSquare: squareLaosSVG
    }
  },
  {
    homepage: 'https://www.nodle.com/',
    info: 'NodleParadis',
    paraId: 2026,
    providers: {
      OnFinality: 'wss://node-7273232234617282560.nv.onfinality.io/ws?apikey=b937a7d7-7395-49b9-b745-60a0342fa365'
    },
    text: 'Nodle',
    ui: {
      color: '#1ab394',
      logo: nodesNodleSVG,
      logoSquare: squareNodleSVG
    }
  },
  {
    homepage: 'https://popnetwork.xyz/',
    info: 'Pop Network',
    paraId: 4001,
    providers: {
      'R0GUE-RPC1': 'wss://rpc1.paseo.popnetwork.xyz',
      'R0GUE-RPC2': 'wss://rpc2.paseo.popnetwork.xyz',
      'R0GUE-RPC3': 'wss://rpc3.paseo.popnetwork.xyz'
    },
    text: 'Pop Network',
    ui: {
      color: '#1C0533',
      logo: chainsPopNetworkSVG
    }
  }
];

export const testParasPaseoCommon: EndpointOption[] = [
  {
    info: 'PaseoAssetHub',
    paraId: 1000,
    providers: {
      Dwellir: 'wss://asset-hub-paseo-rpc.dwellir.com',
      IBP1: 'wss://sys.ibp.network/asset-hub-paseo',
      IBP2: 'wss://sys.dotters.network/asset-hub-paseo',
      StakeWorld: 'wss://pas-rpc.stakeworld.io/assethub'
    },
    teleport: [-1],
    text: 'AssetHub',
    ui: {
      color: '#77bb77',
      logo: nodesPaseoAssetHubSVG,
      logoSquare: squareAssetHubTestnetSVG
    }
  }
];

export const testRelayPaseo: EndpointOption = {
  dnslink: 'paseo',
  genesisHash: PASEO_GENESIS,
  info: 'paseo',
  isPeopleForIdentity: false,
  isRelay: true,
  linked: [
    ...testParasPaseoCommon,
    ...testParasPaseo
  ],
  providers: {
    Amforc: 'wss://paseo.rpc.amforc.com',
    Dwellir: 'wss://paseo-rpc.dwellir.com',
    IBP1: 'wss://rpc.ibp.network/paseo',
    IBP2: 'wss://rpc.dotters.network/paseo',
    StakeWorld: 'wss://pas-rpc.stakeworld.io',
    Zondax: 'wss://api.zondax.ch/pas/node/rpc'
    // 'light client': 'light://substrate-connect/paseo'
  },
  teleport: getTeleports(testParasPaseoCommon),
  text: 'Paseo',
  ui: {
    color: '#38393F',
    identityIcon: 'polkadot',
    logo: chainsPaseoPNG,
    logoSquare: squarePaseoTestnetSVG
  }
};
