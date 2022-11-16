import type {ChainName} from './chains'

export type BlockExplorerName = 'etherscan'
export type BlockExplorer = { name: string; url: string }

type EtherscanChains = Extract<ChainName,
    | 'mainnet'
    | 'ethereumpow'
    | 'goerli'
    | 'sepolia'
    | 'optimism'
    | 'optimismGoerli'
    | 'polygon'
    | 'polygonMumbai'
    | 'arbitrum'
    | 'arbitrumGoerli'>
export const etherscanBlockExplorers: Record<EtherscanChains, BlockExplorer> = {
    mainnet: {
        name: 'Etherscan',
        url: 'https://etherscan.io',
    },
    ethereumpow: {
        name: 'Etherscan',
        url: 'https://www.oklink.com/en/ethw',
    },
    goerli: {
        name: 'Etherscan',
        url: 'https://goerli.etherscan.io',
    },
    sepolia: {
        name: 'Etherscan',
        url: 'https://sepolia.etherscan.io',
    },
    optimism: {
        name: 'Etherscan',
        url: 'https://optimistic.etherscan.io',
    },
    optimismGoerli: {
        name: 'Etherscan',
        url: 'https://goerli-optimism.etherscan.io',
    },
    polygon: {
        name: 'PolygonScan',
        url: 'https://polygonscan.com',
    },
    polygonMumbai: {
        name: 'PolygonScan',
        url: 'https://mumbai.polygonscan.com',
    },
    arbitrum: {name: 'Arbiscan', url: 'https://arbiscan.io'},
    arbitrumGoerli: {name: 'Arbiscan', url: 'https://goerli.arbiscan.io'},
} as const
