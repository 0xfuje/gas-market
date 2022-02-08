import React, { useEffect, useState } from 'react';
import { useGetChainsQuery } from '../features/api/apiSlice';
import { nanoid } from '@reduxjs/toolkit';
import {Chain } from './Chain';
import styled from 'styled-components';
import { Spinner } from './Loaders';

function Chains() {
    const [areChainsLoaded, setAreChainsLoaded] = useState(false);
    const { data, isLoading, isFetching, isSuccess } = useGetChainsQuery();

    useEffect(() => {
        if (isLoading || isFetching) setAreChainsLoaded(false);
        if (isSuccess) setAreChainsLoaded(true);
    }, [isLoading, isFetching, isSuccess])

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
    areChainsLoaded ? 
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
    <StyledChains className='Chains'>
        {areChainsLoaded ? renderChains : <h2 className='Chains-loading'>Loading gas prices...</h2>}
    </StyledChains>
    );
}

const StyledChains = styled.div`
    display: grid;
    grid-gap: ${props => props.theme.space.epsilon};
    margin: 0 auto;
    .Chains {
        &-loading {
            font-size: ${props => props.theme.font.size.alpha};
        }
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.epsilon}) {
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        max-width: 702px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.delta}) {
        grid-gap: ${props => props.theme.space.delta};
        max-width: 824px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.beta}) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1248px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.alpha}) {
        grid-template-columns: repeat(4, 1fr);
        max-width: 1672px;
    }
    
`

export default Chains;
