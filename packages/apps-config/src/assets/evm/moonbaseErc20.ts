// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assetsEarthSVG, assetsJupiterSVG, assetsMarsSVG, assetsMercurySVG, assetsNeptuneSVG, assetsPlutoSVG, assetsSaturnSVG, assetsUranusSVG, assetsVenusSVG } from "@polkagate/apps-config/ui/logos/assets";
import { ERC20Asset } from "./types.js";

export const moonbaseErc20: ERC20Asset[] = [
    {
        "symbol": "MERC",
        "decimal": 18,
        "text": "Mercury",
        "ui": {
            color: "#ba9874",
            logo: assetsMercurySVG,
            logoSquare: assetsMercurySVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0x37822de108AFFdd5cDCFDaAa2E32756Da284DB85"
            }
        ]
    },
    {
        "symbol": "VEN",
        "decimal": 18,
        "text": "Venus",
        "ui": {
            color: "#e15500",
            logo: assetsVenusSVG,
            logoSquare: assetsVenusSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0xCdF746C5C86Df2c2772d2D36E227B4c0203CbA25"
            }
        ]
    },
    {
        "symbol": "ERTH",
        "decimal": 18,
        "text": "Earth",
        "ui": {
            color: "#71d5f6",
            logo: assetsEarthSVG,
            logoSquare: assetsEarthSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0x08B40414525687731C23F430CEBb424b332b3d35"
            }
        ]
    },
     {
        "symbol": "MARS",
        "decimal": 18,
        "text": "Mars",
        "ui": {
            color: "#FB6D51",
            logo: assetsMarsSVG,
            logoSquare: assetsMarsSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0x1FC56B105c4F0A1a8038c2b429932B122f6B631f"
            }
        ]
    },
    {
        "symbol": "JUP",
        "decimal": 18,
        "text": "Jupiter",
        "ui": {
            color: "#e07b4a",
            logo: assetsJupiterSVG,
            logoSquare: assetsJupiterSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0x9Aac6FB41773af877a2Be73c99897F3DdFACf576"
            }
        ]
    },
    {
        "symbol": "SAT",
        "decimal": 18,
        "text": "Saturn",
        "ui": {
            color: "#b16d3e",
            logo: assetsSaturnSVG,
            logoSquare: assetsSaturnSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0xe75F9ae61926FF1d27d16403C938b4cd15c756d5"
            }
        ]
    },
    {
        "symbol": "UNS",
        "decimal": 18,
        "text": "Uranus",
        "ui": {
            color: "#0088c3",
            logo: assetsUranusSVG,
            logoSquare: assetsUranusSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0xd9224c102A73e5941aBfCd645e08623dC4d182bc"
            }
        ]
    },
    {
        "symbol": "NEPT",
        "decimal": 18,
        "text": "Neptune",
        "ui": {
            color: "#2e8ee3",
            logo: assetsNeptuneSVG,
            logoSquare: assetsNeptuneSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0xed13B028697febd70f34cf9a9E280a8f1E98FD29"
            }
        ]
    },
    {
        "symbol": "PLUT",
        "decimal": 18,
        "text": "Pluto",
        "ui": {
            color: "#725f5a",
            logo: assetsPlutoSVG,
            logoSquare: assetsPlutoSVG
        },
        "instances": [
            {
                "chainId": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
                "contractAddress": "0x4c945cD20DD13168BC87f30D55f12dC26512ca33"
            }
        ]
    }
]
