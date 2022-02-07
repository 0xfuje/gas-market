import React from 'react';
import { useGetChainsQuery } from '../features/api/apiSlice';
import { nanoid } from '@reduxjs/toolkit';
import Chain from './Chain';

function Chains() {
    const { data, isSuccess } = useGetChainsQuery();
    // exclude invalid chain data and highly centralized chains
    const chains = data?.filter((c) => {
        return (
            c.id !== 'aurora' &&
            c.id !== 'celo' &&
            c.id !== 'movr' &&
            c.id !== 'heco' &&
            c.id !== 'btt' &&
            c.id !== 'sbch' &&
            c.id !== 'okt'
        )
    });
    const renderChains = 
    isSuccess ? 
    chains?.map((c) => {
        return (
            <Chain
                key={nanoid()}
                id={c.id}
                name={c.name}
                logo_url={c.logo_url}
                wrapped_token_id={c.wrapped_token_id}
            />
    )})
    : null;
    return (
    <div className='Chains'>
        {isSuccess ? renderChains : '...loading'}
    </div>
    );
}


export default Chains;
