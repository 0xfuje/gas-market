import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IChain, IGasMarketChain, ITokenApiArgs } from '../../types';
import { IToken } from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://openapi.debank.com/v1'}),
    endpoints: (builder) => ({
        getChains: builder.query<IChain[], void>({
            query: () => '/chain/list'
        }),
        getToken: builder.query<IToken, ITokenApiArgs>({
            query: (args) => {
                const {chainId, tokenId} = args;
                return `token?chain_id=${chainId}&id=${tokenId}`;
            }
        }),
        getGasMarket: builder.query<IGasMarketChain[], string>({
            query: (chainId) => `/wallet/gas_market?chain_id=${chainId}`
        })
    })
})

export const { 
    useGetChainsQuery,
    useGetTokenQuery,
    useGetGasMarketQuery
} = apiSlice;