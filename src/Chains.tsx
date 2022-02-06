import React from 'react';
import { useGetChainsQuery } from './features/api/apiSlice';
import { nanoid } from '@reduxjs/toolkit';
import Chain from './components/Chain';

function Chains() {
    const {
        data,
        isSuccess,
    } = useGetChainsQuery();
    
    const chains = data;
    const renderChains = 
    isSuccess ? 
    chains?.map((c) => {
        return (
            <Chain
                id={c.id}
                name={c.name}
                community_id={c.community_id}
                native_token_id={c.native_token_id}
                logo_url={c.logo_url}
                wrapped_token_id={c.wrapped_token_id}
            />
    )})
    : '';
    return (
    <div className='Chains'>
        {isSuccess ? renderChains : '...loading'}
    </div>
    );
}


export default Chains;
