import React from 'react';
import { IChain, IToken } from '../types';
import { useGetTokenQuery, useGetGasMarketQuery } from '../features/api/apiSlice';
import { IGasMarketChain } from '../types';

function Chain(props: Omit<IChain, "community_id" | "native_token_id">) {
    const { data: tokenData, isSuccess: isTokenQuerySuccess} = 
    useGetTokenQuery({chainId: props.id, tokenId: props.wrapped_token_id});

    const { data: gasMarketData, isSuccess: isGasMarketQuerySuccess} =
    useGetGasMarketQuery(props.id);
    
    const tokenPrice = isTokenQuerySuccess ? tokenData!.price : null;
    const validateGasMarket = isGasMarketQuerySuccess ? gasMarketData : null;
    
    return <div className='Chain'>
        <h2>{props.name} - {tokenPrice}</h2>
    </div>;
}

export default Chain;
