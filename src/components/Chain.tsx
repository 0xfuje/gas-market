
import { useEffect, useState } from 'react';
import { IChain } from '../types';
import { useGetTokenQuery, useGetGasMarketQuery } from '../features/api/apiSlice';
import { Gas, GasLoading } from './Gas';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';

function Chain(props: Omit<IChain, "community_id" | "native_token_id">) {
    const [isTokenLoaded, setIsTokenLoaded] = useState(false);
    const [areGasMarketLoaded, setAreGasMarketLoaded] = useState(false);

    const { 
        data: tokenData,
        isLoading: isTokenLoading,
        isFetching: isTokenFetching,
        isSuccess: isTokenSuccess
    } =  useGetTokenQuery({chainId: props.id, tokenId: props.wrapped_token_id});

    const {
        data: gasMarketData,
        isLoading: isGasLoading,
        isFetching: isGasFetching,
        isSuccess: isGasSuccess,
    } = useGetGasMarketQuery(props.id);
    
    useEffect(() => {
        if (isTokenLoading || isTokenFetching) setIsTokenLoaded(false);
        if (isTokenSuccess) setIsTokenLoaded(true);
        if (isGasLoading || isGasFetching) setAreGasMarketLoaded(false);
        if (isGasSuccess) setAreGasMarketLoaded(true);
    }, [
        isTokenLoading, isTokenFetching, isTokenSuccess,
        isGasLoading, isGasFetching, isGasSuccess
    ])

    const tokenPrice = isTokenLoaded ? tokenData!.price : 0;

    const calcPrices = (wei: number) => {
        let gwei = wei / (10 * 10**8);
        if (props.id === 'op') gwei = wei / (10 * 10**5);
        const eth = gwei / (10 * 10**8);
        const usd = (eth * tokenPrice) * 21000;
        return { gwei, usd }
    }

    const renderGasMarket = areGasMarketLoaded ?
    gasMarketData?.filter((gas) => gas.level !== 'custom')
    .map((gas) => {
            return <Gas
                key={nanoid()}
                level={gas.level}
                gweiPrice={calcPrices(gas.price)["gwei"]}
                usdPrice={calcPrices(gas.price)["usd"]}
                isLoaded={areGasMarketLoaded}
            />
        }) : (
            <>
                <GasLoading />
                <GasLoading />
                <GasLoading />
            </>
        )

    return (
        <StyledChain className='Chain'>
            <div className='Chain-header'>
                <img className="Chain-header-logo" src={props.logo_url} alt={`${props.name} logo`} />
                <h2 className="Chain-header-name">{props.name}</h2>
            </div>
            <div className="Chain-gasPrices">
                {renderGasMarket}
            </div>
            <img className="Chain-backgroundImg" src={props.logo_url} alt={`${props.name} background logo`} />
        </StyledChain>
    );
}

/* function ChainLoading() {
    return (
        <StyledChainLoading className='ChainLoading'/>
    )
} */

const StyledChain = styled.div`
    position: relative;
    background: ${props => props.theme.colors.gradient.dark};
    padding: ${props => props.theme.space.delta};
    border-radius: ${props => props.theme.borrad.beta};
    border: solid 1px ${props => props.theme.colors.dark};
    width: 20rem;
    @media screen and (min-width: ${props => props.theme.breakpoints.eta}) {
        width: 21.5rem;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.delta}) {
        width: 25rem;
    }
    .Chain {
        &-header {
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: ${props => props.theme.space.epsilon};
            
            &:after {
                content: '';
                position: absolute;
                display: inline-block;
                bottom: -${props => props.theme.space.zeta};
                left: 0;
                height: 1px;
                width: 100%;
                background-color: ${props => props.theme.colors.darkgrey};
            }
            &-logo {
                margin-right: ${props => props.theme.space.zeta};
                width: ${props => props.theme.space.gamma};
            }
            &-name {
                font-size: ${props => props.theme.font.size.beta};
            }
        }
        &-gasPrices {
            display: flex;
            justify-content: space-between;
        }
        &-backgroundImg {
            width: 6em;
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            z-index: -2;
            opacity: 0.2;
            border-radius: ${props => props.theme.borrad.alpha};
        }
    }
`

/* const StyledChainLoading = styled.div`
    height: 11.375em;
    background: ${props => props.theme.colors.gradient.dark};
    border-radius: ${props => props.theme.borrad.beta};
    border: solid 1px ${props => props.theme.colors.dark};
    width: 20rem;
    @media screen and (min-width: ${props => props.theme.breakpoints.eta}) {
        width: 21.5rem;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.delta}) {
        width: 25rem;
    }
` */

export { Chain };