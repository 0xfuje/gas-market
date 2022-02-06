import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IChain, ITokenApiArgs } from '../../types';
import { IToken } from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://openapi.debank.com/v1'}),
    endpoints: (builder) => ({
        getChains: builder.query<IChain[], void>({
            query: () => '/chain/list'
        }),
        getToken: builder.query<IToken, ITokenApiArgs>({
            query: (props) => {
                const {chainId, tokenId} = props;
                return `token?chain_id=${chainId}&id=${tokenId}`;
            }
        })
    })
})

export const { useGetChainsQuery, useGetTokenQuery } = apiSlice;