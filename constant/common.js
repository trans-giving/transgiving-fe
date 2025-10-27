import { arbitrum, avalanche, blast, bsc, bscTestnet, mainnet, polygon, sepolia } from 'wagmi/chains'
// DEFAULT_META
export const DEFAULT_META = {
  siteName: 'XOX Labs Launchpad',
  title: 'X Pad: The Ultimate DeFi Launchpad for Innovators and Investors.',
  description:
    'X Pad allows you to Launch & Create tokens and token sales effortlessly. Create Single and Multi-chain Sales Support for Maximum Reach. Earn from our Smart Revenue Sharing Program for Optimal Earnings, Join Airdrops, Staking Pools and much more. Invest in the projects of the future, Today.'
}

export const BASE_PERCENTAGE = 10000

export enum ChainId {
  BSC = 56,
  ETHEREUM = 1,
  ARBITRUM = 42161,
  POLYGON = 137,
  AVALANCHE = 43114,
  FANTOM = 250,
  SOLANA = 900,
  BLAST = 81457,
  CRONOS = 25,
  BASE = 8453,
  SEPOLIA = 11155111,
  BSC_TESTNET = 97,
  ARBITRUM_TESTNET = 421613,
  POLYGON_TESTNET = 80001,
  OPTIMISM = 10,
  OPTIMISM_SEPOLIA_TESTNET = 11155420,
  BLAST_TESTNET = 168587773,
  AVALANCHE_TESTNET = 43113,
  BITCOIN = 0,
  TON = 1100,
  TON_TEST = 1101,
  ZKSYNC = 324,
  ZKSYNC_TEST = 300,
  MANTLE = 5000,
  LINEA = 59144,
  RONIN = 2020
}

export const NATIVE_TOKEN: Record<number, string> = {
  [ChainId.BSC]: 'BNB',
  [ChainId.ETHEREUM]: 'ETH',
  [ChainId.ARBITRUM]: 'ETH',
  [ChainId.POLYGON]: 'MATIC',
  [ChainId.AVALANCHE]: 'AVAX',
  [ChainId.FANTOM]: 'FTM',
  [ChainId.SOLANA]: 'SOL',
  [ChainId.BLAST]: 'ETH',
  [ChainId.CRONOS]: 'CRO',
  [ChainId.BASE]: 'ETH',
  [ChainId.SEPOLIA]: 'ETH',
  [ChainId.BSC_TESTNET]: 'BNB',
  [ChainId.ARBITRUM_TESTNET]: 'ETH',
  [ChainId.POLYGON_TESTNET]: 'MATIC',
  [ChainId.OPTIMISM]: 'OPT',
  [ChainId.OPTIMISM_SEPOLIA_TESTNET]: 'TSPL',
  [ChainId.BLAST_TESTNET]: 'ETH',
  [ChainId.AVALANCHE_TESTNET]: 'AVAX',
  [ChainId.BITCOIN]: 'BTC',
  [ChainId.TON]: 'TON',
  [ChainId.TON_TEST]: 'TTON',
  [ChainId.ZKSYNC]: 'ZKS',
  [ChainId.ZKSYNC_TEST]: 'TZKS',
  [ChainId.MANTLE]: 'MNT',
  [ChainId.LINEA]: 'ETH',
  [ChainId.RONIN]: 'RON'
}

// type SupportedChainsType = {
//   [key: number]: {
//     name: string
//     symbol: string
//     shortName: string
//     chainId: number
//     chainSymbolUrl: string
//     blockExplorerUrl: string
//     decimals: number
//     explorerImg?: string
//   }
// }

export const SUPPORTED_CHAINS = {
  // [ChainId.ETHEREUM]: {
  //   name: 'Ethereum',
  //   symbol: 'ETH',
  //   shortName: 'ETH',
  //   chainId: ChainId.ETHEREUM,
  //   chainSymbolUrl: 'images/launchpad/chains-symbol/ETH.svg',
  //   explorerImg: `images/launchpad/icons/11155111-explorer.svg`,
  //   blockExplorerUrl: 'https://etherscan.io',
  //   decimals: 18
  // },
  // [ChainId.BSC]: {
  //   name: 'Binance Smart Chain',
  //   symbol: 'BNB',
  //   shortName: 'BSC',
  //   chainId: ChainId.BSC,
  //   chainSymbolUrl: 'images/launchpad/chains-symbol/BNB.svg',
  //   explorerImg: 'images/launchpad/chains-symbol/BNB.svg',
  //   blockExplorerUrl: 'https://bscscan.com',
  //   decimals: 18
  // },

  // [ChainId.POLYGON]: {
  //   name: 'Polygon',
  //   symbol: 'MATIC',
  //   shortName: 'Polygon',
  //   chainId: ChainId.POLYGON,
  //   chainSymbolUrl: 'images/launchpad/chains-symbol/Polygon.svg',
  //   explorerImg: `images/launchpad/icons/${ChainId.ETHEREUM}-explorer.svg`,
  //   blockExplorerUrl: 'https://polygonscan.com',
  //   decimals: 18
  // },
  // [ChainId.ARBITRUM]: {
  //   name: 'Arbitrum',
  //   symbol: 'ETH',
  //   shortName: 'Arbitrum',
  //   chainId: ChainId.ARBITRUM,
  //   chainSymbolUrl: 'images/launchpad/chains-symbol/Arbitrum.svg',
  //   explorerImg: `images/launchpad/icons/${ChainId.ETHEREUM}-explorer.svg`,
  //   blockExplorerUrl: 'https://arbiscan.io',
  //   decimals: 18
  // },
  // [ChainId.BLAST]: {
  //   name: 'Blast',
  //   symbol: 'BLAST',
  //   shortName: 'Blast',
  //   chainId: ChainId.BLAST,
  //   chainSymbolUrl: 'images/launchpad/chains-symbol/Blast.svg',
  //   explorerImg: `images/launchpad/icons/${ChainId.ETHEREUM}-explorer.svg`,
  //   blockExplorerUrl: 'https://blastscan.io/',
  //   decimals: 18
  // },
  // [ChainId.AVALANCHE]: {
  //   name: 'Avalanche',
  //   symbol: 'AVAX',
  //   shortName: 'Avalanche',
  //   chainId: ChainId.AVALANCHE,
  //   chainSymbolUrl: 'images/launchpad/chains-symbol/Avalanche.svg',
  //   explorerImg: `images/launchpad/icons/${ChainId.ETHEREUM}-explorer.svg`,
  //   blockExplorerUrl: 'https://snowtrace.io/',
  //   decimals: 18
  // },
  [ChainId.SEPOLIA]: {
    name: 'Sepolia',
    symbol: 'ETH',
    shortName: 'Sepolia',
    chainId: ChainId.SEPOLIA,
    chainSymbolUrl: 'images/launchpad/chains-symbol/ETH.svg',
    explorerImg: `images/launchpad/icons/11155111-explorer.svg`,
    blockExplorerUrl: 'https://sepolia.etherscan.io/',
    decimals: 18
  },
  [ChainId.BSC_TESTNET]: {
    name: 'BNB Testnet',
    symbol: 'BNB',
    shortName: 'BSC Testnet',
    chainId: ChainId.BSC_TESTNET,
    chainSymbolUrl: 'images/launchpad/chains-symbol/BNB.svg',
    explorerImg: 'images/launchpad/chains-symbol/BNB.svg',
    blockExplorerUrl: 'https://testnet.bscscan.com',
    decimals: 18
  },
}

export const CHAIN_LIST = [sepolia, bscTestnet]

// Breakpoint
export const SCREEN_XXL = 1600 + 0.02
export const SCREEN_XL = 1200 + 0.02
export const SCREEN_L = 992 + 0.02
export const SCREEN_MD = 768 + 0.02
export const SCREEN_SM = 576 + 0.02
export const SCREEN_XS = 375 + 0.02
export const NUMBER_STRING_REGEX = /^(?:\d+|\d*\.\d+|\.\d+||\d*\.)$/

export const STAKING_SUPPORTED_CHAINS = [ChainId.ETHEREUM, ChainId.BSC]

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
