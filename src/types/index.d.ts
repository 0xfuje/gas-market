export interface IChain {
    id: string,
    community_id: number,
    name: string,
    native_token_id: string,
    logo_url: string,
    wrapped_token_id: string
}


export interface IToken {
    id: string,
    chain: string,
    name: string,
    symbol: string,
    display_symbol: string,
    optimized_symbol: string,
    decimals: number,
    logo_url: string,
    protocol_id: string,
    price: number,
    is_verified: boolean,
    is_core: boolean,
    is_wallet: boolean
    time_at: number    
}

export interface ITokenApiArgs {
    chainId: string,
    tokenId: string
}

export type IGasLevel = 'slow' | 'normal' | 'fast' | 'custom'; 

export type IGasLevelEmoji = () => '🚲' | '🏍️' |  '🚀' | undefined;
export interface IGasMarketChain {
    level: IGasLevel,
    front_tx_count: number,
    price: number,
    estimated_seconds: number,
    base_fee?: number
}

export interface IGas {
    level: IGasLvel,
    gweiPrice: number,
    usdPrice: number
}