// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assetsAvaxSVG, assetsBeansSVG, assetsBeproSVG, assetsBnbSVG, assetsBusdSVG, assetsCfgSVG, assetsConvSVG, assetsCpSVG, assetsCwsSVG, assetsDaiSVG, assetsEftSVG, assetsEthSVG, assetsFraxSVG, assetsFtmSVG, assetsGlintSVG, assetsGlmrSVG, assetsIdiaSVG, assetsKiltSVG, assetsKmaSVG, assetsMantaSVG, assetsMaticSVG, assetsMbXENSVG, assetsMfamSVG, assetsMovrSVG, assetsMythSVG, assetsNodlSVG, assetsPhaSVG, assetsPinkSVG, assetsRibSVG, assetsRmrkSVG, assetsSolarSVG, assetsSolWormholeSVG, assetsStDOTSVG, assetsStellaSVG, assetsStETHSVG, assetsTetherUsdtSVG, assetsUniSVG, assetsUsdCoinUsdcSVG, assetsWbtcSVG, assetsWellSVG, assetsZlkSVG } from "@polkagate/apps-config/ui/logos/assets";
import { squareTetherSVG, squareUsdcSVG } from "@polkagate/apps-config/ui/logos/square";
import { ERC20Asset } from "./types.js";
import { moonbaseErc20 } from "./moonbaseErc20.js";

export const erc20Assets: ERC20Asset[] = [
    ...moonbaseErc20,
    {
        "symbol": "USDT",
        "decimal": 6,
        "text": "Tether USD",
        "priceId": "tether",
        "ui": {
            color: "#26A17B",
            logo: assetsTetherUsdtSVG,
            logoSquare: squareTetherSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73"
            },
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0xB44a9B6905aF7c801311e8F4E76932ee959c663C"
            },
            {
                "chainId": "eip155:1",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "buyProviders": {
                    "transak": {
                        "network": "ETHEREUM"
                    },
                    "mercuryo": {
                        "network": "ETHEREUM"
                    },
                    "banxa": {
                        "coinType": "USDT",
                        "blockchain": "ETH"
                    }
                },
                "sellProviders": {
                    "transak": {
                        "network": "ETHEREUM"
                    },
                    "mercuryo": {
                        "network": "ETHEREUM"
                    }
                }
            }
        ]
    },
    {
        "symbol": "USDC",
        "decimal": 6,
        "text": "USD Coin",
        "priceId": "usd-coin",
        "ui": {
            color: "#2775CA",
            logo: assetsUsdCoinUsdcSVG,
            logoSquare: squareUsdcSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b"
            },
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D"
            },
            {
                "chainId": "eip155:1",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "buyProviders": {
                    "transak": {
                        "network": "ETHEREUM"
                    },
                    "mercuryo": {
                        "network": "ETHEREUM"
                    },
                    "banxa": {
                        "coinType": "USDC",
                        "blockchain": "ETH"
                    }
                },
                "sellProviders": {
                    "transak": {
                        "network": "ETHEREUM"
                    },
                    "mercuryo": {
                        "network": "ETHEREUM"
                    }
                }
            }
        ]
    },
    {
        "symbol": "BUSD",
        "decimal": 18,
        "text": "Binance-Peg BUSD Token",
        "priceId": "binance-usd",
        "ui": {
            color: "#775CA",
            logo: assetsBusdSVG,
            logoSquare: assetsBusdSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F"
            }
        ]
    },
    {
        "symbol": "MATIC",
        "decimal": 18,
        "text": "Matic",
        "priceId": "matic-network",
        "ui": {
            color: "#8247E5",
            logo: assetsMaticSVG,
            logoSquare: assetsMaticSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x3405A1bd46B85c5C029483FbECf2F3E611026e45"
            },
            {
                "chainId": "eip155:1",
                "contractAddress": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
            }
        ]
    },
    {
        "symbol": "DAI",
        "decimal": 18,
        "text": "Dai Stablecoin",
        "priceId": "dai",
        "ui": {
            color: "#F5AC37",
            logo: assetsDaiSVG,
            logoSquare: assetsDaiSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x765277EebeCA2e31912C9946eAe1021199B39C61"
            },
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844"
            },
            {
                "chainId": "eip155:1",
                "contractAddress": "0x6b175474e89094c44da98b954eedeac495271d0f"
            }
        ]
    },
    {
        "symbol": "AVAX",
        "decimal": 18,
        "text": "Avalanche",
        "priceId": "avalanche-2",
        "ui": {
            color: "#E84142",
            logo: assetsAvaxSVG,
            logoSquare: assetsAvaxSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x4792C1EcB969B036eb51330c63bD27899A13D84e"
            }
        ]
    },
    {
        "symbol": "WBTC",
        "decimal": 8,
        "text": "Wrapped BTC",
        "priceId": "wrapped-bitcoin",
        "ui": {
            color: "#000",
            logo: assetsWbtcSVG,
            logoSquare: assetsWbtcSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x922D641a426DcFFaeF11680e5358F34d97d112E1"
            },
            {
                "chainId": "eip155:1",
                "contractAddress": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
            }
        ]
    },
    {
        "symbol": "FRAX",
        "decimal": 18,
        "text": "Frax",
        "priceId": "frax",
        "ui": {
            color: "#FA6980",
            logo: assetsFraxSVG,
            logoSquare: assetsFraxSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x322E86852e492a7Ee17f28a78c663da38FB33bfb"
            },
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x1A93B23281CC1CDE4C4741353F3064709A16197d"
            }
        ]
    },
    {
        "symbol": "FTM",
        "decimal": 18,
        "text": "Fantom",
        "priceId": "fantom",
        "ui": {
            color: "#1969FF",
            logo: assetsFtmSVG,
            logoSquare: assetsFtmSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xC19281F22A075E0F10351cd5D6Ea9f0AC63d4327"
            }
        ]
    },
    {
        "symbol": "FXS",
        "decimal": 18,
        "text": "Frax Share",
        "priceId": "frax-share",
        "ui": {
            color: "#FA6980",
            logo: assetsFraxSVG,
            logoSquare: assetsFraxSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x2CC0A9D8047A5011dEfe85328a6f26968C8aaA1C"
            },
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x6f1D1Ee50846Fcbc3de91723E61cb68CFa6D0E98"
            }
        ]
    },
    {
        "symbol": "WGLMR",
        "decimal": 18,
        "text": "Wrapped GLMR",
        "priceId": "wrapped-moonbeam",
        "ui": {
            color: "#21bad5",
            logo: assetsGlmrSVG,
            logoSquare: assetsGlmrSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xAcc15dC74880C9944775448304B263D191c6077F"
            }
        ]
    },
    {
        "symbol": "BEPRO",
        "decimal": 18,
        "text": "BEPRO Network",
        "priceId": "bepro-network",
        "ui": {
            color: "#000",
            logo: assetsBeproSVG,
            logoSquare: assetsBeproSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x4EdF8E0778967012D46968ceadb75436d0426f88"
            }
        ]
    },
    {
        "symbol": "mbXEN",
        "decimal": 18,
        "text": "XEN Crypto",
        "ui": {
            color: "#fff",
            logo: assetsMbXENSVG,
            logoSquare: assetsMbXENSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xb564A5767A00Ee9075cAC561c427643286F8F4E1"
            }
        ]
    },
    {
        "symbol": "CONV",
        "decimal": 18,
        "text": "Convergence",
        "priceId": "convergence",
        "ui": {
            color: "#6D6EF3",
            logo: assetsConvSVG,
            logoSquare: assetsConvSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x8006320739fC281da67Ee62eB9b4Ef8ADD5C903a"
            }
        ]
    },
    {
        "symbol": "GLINT",
        "decimal": 18,
        "text": "Beamswap Token",
        "priceId": "beamswap",
        "ui": {
            color: "#00CCFF",
            logo: assetsGlintSVG,
            logoSquare: assetsGlintSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xcd3B51D98478D53F4515A306bE565c6EebeF1D58"
            }
        ]
    },
    {
        "symbol": "EFT",
        "decimal": 18,
        "text": "Energyfi Token",
        "priceId": "energyfi",
        "ui": {
            color: "#A466FF",
            logo: assetsEftSVG,
            logoSquare: assetsEftSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xA423E7eEB60547d9C7b65005477b63ae7CE67E62"
            }
        ]
    },
    {
        "symbol": "IDIA",
        "decimal": 18,
        "text": "Impossible Decentralized Incubator Access Token",
        "priceId": "idia",
        "ui": {
            color: "#FF0EA9",
            logo: assetsIdiaSVG,
            logoSquare: assetsIdiaSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x2d28AA28fA1E5e6bF121CF688309Bf3faAAe3C70"
            }
        ]
    },
    {
        "symbol": "WMOVR",
        "decimal": 18,
        "text": "Wrapped MOVR",
        "ui": {
            color: "#95F821",
            logo: assetsMovrSVG,
            logoSquare: assetsMovrSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x98878B06940aE243284CA214f92Bb71a2b032B8A"
            }
        ]
    },
    {
        "symbol": "CWS",
        "decimal": 18,
        "text": "Crowns",
        "priceId": "crowns",
        "ui": {
            color: "#D7A049",
            logo: assetsCwsSVG,
            logoSquare: assetsCwsSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x6fc9651f45B262AE6338a701D563Ab118B1eC0Ce"
            }
        ]
    },
    {
        "symbol": "ZLK",
        "decimal": 18,
        "text": "Zenlink Network Token",
        "priceId": "zenlink-network-token",
        "ui": {
            color: "#3A3A3A",
            logo: assetsZlkSVG,
            logoSquare: assetsZlkSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x0f47ba9d9Bde3442b42175e51d6A367928A1173B"
            }
        ]
    },
    {
        "symbol": "SOLAR",
        "decimal": 18,
        "text": "SolarBeam Token",
        "priceId": "solarbeam",
        "ui": {
            color: "#FCC17C",
            logo: assetsSolarSVG,
            logoSquare: assetsSolarSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B"
            }
        ]
    },
    {
        "symbol": "RIB",
        "decimal": 18,
        "text": "RiverBoat",
        "priceId": "riverboat",
        "ui": {
            color: "#56DED0",
            logo: assetsRibSVG,
            logoSquare: assetsRibSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0xbD90A6125a84E5C512129D622a75CDDE176aDE5E"
            }
        ]
    },
    {
        "symbol": "BEANS",
        "decimal": 18,
        "text": "MoonBeans",
        "priceId": "moonbeans",
        "ui": {
            color: "#2BDDE8",
            logo: assetsBeansSVG,
            logoSquare: assetsBeansSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x65b09ef8c5A096C5Fd3A80f1F7369E56eB932412"
            },
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0xC2392DD3e3fED2c8Ed9f7f0bDf6026fcd1348453"
            }
        ]
    },
    {
        "symbol": "STELLA",
        "decimal": 18,
        "text": "StellaSwap",
        "priceId": "stellaswap",
        "ui": {
            color: "#E2107B",
            logo: assetsStellaSVG,
            logoSquare: assetsStellaSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2"
            }
        ]
    },
    {
        "symbol": "BNB",
        "decimal": 18,
        "text": "Binance",
        "priceId": "binancecoin",
        "ui": {
            color: "#F3BA2F",
            logo: assetsBnbSVG,
            logoSquare: assetsBnbSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055"
            },
            {
                "chainId": "eip155:1",
                "contractAddress": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
            }
        ]
    },
    {
        "symbol": "ETH",
        "decimal": 18,
        "text": "Ethereum",
        "priceId": "ethereum",
        "ui": {
            color: "#627eea",
            logo: assetsEthSVG,
            logoSquare: assetsEthSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f"
            }
        ]
    },
    {
        "symbol": "CP",
        "decimal": 18,
        "text": "Cypress",
        "priceId": "cypress",
        "ui": {
            color: "#973A1B",
            logo: assetsCpSVG,
            logoSquare: assetsCpSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x6021D2C27B6FBd6e7608D1F39B41398CAee2F824"
            }
        ]
    },
    {
        "symbol": "stETH",
        "decimal": 18,
        "text": "Lido Staked Ether",
        "priceId": "staked-ether",
        "ui": {
            color: "#A64BFF",
            logo: assetsStETHSVG,
            logoSquare: assetsStETHSVG
        },
        "instances": [
            {
                "chainId": "eip155:1",
                "contractAddress": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
            }
        ]
    },
    {
        "symbol": "UNI",
        "decimal": 18,
        "text": "Uniswap",
        "priceId": "uniswap",
        "ui": {
            color: "#FF007A",
            logo: assetsUniSVG,
            logoSquare: assetsUniSVG
        },
        "instances": [
            {
                "chainId": "eip155:1",
                "contractAddress": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
            }
        ]
    },
    {
        "symbol": "WELL",
        "decimal": 18,
        "text": "Moonwell",
        "priceId": "moonwell-artemis",
        "ui": {
            color: "#21bad5",
            logo: assetsWellSVG,
            logoSquare: assetsWellSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x511aB53F793683763E5a8829738301368a2411E3"
            }
        ]
    },
    {
        "symbol": "MFAM",
        "decimal": 18,
        "text": "Moonwell Apollo",
        "priceId": "moonwell",
        "ui": {
            color: "#FFCF60",
            logo: assetsMfamSVG,
            logoSquare: assetsMfamSVG
        },
        "instances": [
            {
                "chainId": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
                "contractAddress": "0xBb8d88bcD9749636BC4D2bE22aaC4Bb3B01A58F1"
            }
        ]
    },
    {
        "symbol": "xcRMRK (old)",
        "decimal": 10,
        "text": "xcRMRK",
        "priceId": "rmrk",
        "ui": {
            color: "#000",
            logo: assetsRmrkSVG,
            logoSquare: assetsRmrkSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xECf2ADafF1De8A512f6e8bfe67a2C836EDb25Da3"
            }
        ]
    },
    {
        "symbol": "stDOT",
        "decimal": 10,
        "text": "StellaSwap Staked DOT",
        "ui": {
            color: "#E2107B",
            logo: assetsStDOTSVG,
            logoSquare: assetsStDOTSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xbc7E02c4178a7dF7d3E564323a5c359dc96C4db4"
            }
        ]
    },
    {
        "symbol": "MANTA",
        "decimal": 18,
        "text": "MANTA",
        "priceId": "manta-network",
        "ui": {
            color: "#0091FF",
            logo: assetsMantaSVG,
            logoSquare: assetsMantaSVG
        },
        "instances": [
            {
                "chainId": "eip155:169",
                "contractAddress": "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5"
            }
        ]
    },
    {
        "symbol": "RMRK",
        "decimal": 18,
        "text": "RMRK",
        "priceId": "rmrk",
        "ui": {
            color: "#EA328A",
            logo: assetsRmrkSVG,
            logoSquare: assetsRmrkSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x524d524B4c9366be706D3A90dcf70076ca037aE3"
            }
        ]
    },
    {
        "symbol": "xcPINK",
        "decimal": 10,
        "text": "PINK",
        "ui": {
            color: "#FF0EA9",
            logo: assetsPinkSVG,
            logoSquare: assetsPinkSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0xfFfFFfFf30478fAFBE935e466da114E14fB3563d"
            }
        ]
    },
    {
        "symbol": "MYTH",
        "decimal": 18,
        "text": "MYTH",
        "priceId": "mythos",
        "ui": {
            color: "#FF0EA9",
            logo: assetsMythSVG,
            logoSquare: assetsMythSVG
        },
        "instances": [
            {
                "chainId": "eip155:1",
                "contractAddress": "0xBA41Ddf06B7fFD89D1267b5A93BFeF2424eb2003"
            }
        ]
    },
    {
        "symbol": "NODL",
        "decimal": 18,
        "text": "Nodle token",
        "priceId": "nodle-network",
        "ui": {
            color: "#19AE82",
            logo: assetsNodlSVG,
            logoSquare: assetsNodlSVG
        },
        "instances": [
            {
                "chainId": "eip155:324",
                "contractAddress": "0xBD4372e44c5eE654dd838304006E1f0f69983154"
            }
        ]
    },
    {
        "symbol": "PHA",
        "decimal": 18,
        "text": "PHA token",
        "priceId": "pha",
        "ui": {
            color: "#DBFC6F",
            logo: assetsPhaSVG,
            logoSquare: assetsPhaSVG
        },
        "instances": [
            {
                "chainId": "eip155:1",
                "contractAddress": "0x6c5bA91642F10282b576d91922Ae6448C9d52f4E"
            }
        ]
    },
    {
        "symbol": "SOL-Wormhole",
        "decimal": 9,
        "text": "Wrapped SOL",
        "priceId": "solana",
        "ui": {
            color: "#19FB9B",
            logo: assetsSolWormholeSVG,
            logoSquare: assetsSolWormholeSVG
        },
        "instances": [
            {
                "chainId": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
                "contractAddress": "0x99fec54a5ad36d50a4bba3a41cab983a5bb86a7d"
            }
        ]
    },
    {
        "symbol": "KMA",
        "decimal": 18,
        "text": "KMA",
        "priceId": "calamari-network",
        "ui": {
            color: "#5C09BA",
            logo: assetsKmaSVG,
            logoSquare: assetsKmaSVG
        },
        "instances": [
            {
                "chainId": "eip155:169",
                "contractAddress": "0x6745CF7A0aAca457F451a4b8c60c8504320F69d0"
            }
        ]
    },
    {
        "symbol": "CFG",
        "decimal": 18,
        "text": "Centrifuge",
        "priceId": "centrifuge-2",
        "ui": {
            color: "#fff",
            logo: assetsCfgSVG,
            logoSquare: assetsCfgSVG
        },
        "instances": [
            {
                "chainId": "eip155:1",
                "contractAddress": "0xcccCCCcCCC33D538DBC2EE4fEab0a7A1FF4e8A94"
            }
        ]
    },
    {
        "symbol": "KILT",
        "decimal": 15,
        "text": "KILT",
        "priceId": "kilt-protocol",
        "ui": {
            color: "#D83D81",
            logo: assetsKiltSVG,
            logoSquare: assetsKiltSVG
        },
        "instances": [
            {
                "chainId": "eip155:1",
                "contractAddress": "0x5d3D01FD6d2Ad1169b17918eB4f153C6616288eB"
            },
            {
                "chainId": "eip155:8453",
                "contractAddress": "0x9E5189a77f698305Ef76510AFF1C528cff48779c"
            }
        ]
    },
    {
        "symbol": "KILT (new)",
        "decimal": 18,
        "text": "KILT Protocol",
        "priceId": "kilt-protocol-2",
        "ui": {
            color: "#D83D81",
            logo: assetsKiltSVG,
            logoSquare: assetsKiltSVG
        },
        "instances": [
            {
                "chainId": "eip155:8453",
                "contractAddress": "0x5D0DD05bB095fdD6Af4865A1AdF97c39C85ad2d8"
            }
        ]
    }
]
