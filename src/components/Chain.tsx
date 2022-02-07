import { IChain } from '../types';
import { useGetTokenQuery, useGetGasMarketQuery } from '../features/api/apiSlice';
import Gas from './Gas';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';

function Chain(props: Omit<IChain, "community_id" | "native_token_id">) {
    const { data: tokenData, isSuccess: isTokenQuerySuccess} = 
    useGetTokenQuery({chainId: props.id, tokenId: props.wrapped_token_id});

    const { data: gasMarketData, isSuccess: isGasMarketQuerySuccess} =
    useGetGasMarketQuery(props.id);
    

    const tokenPrice = isTokenQuerySuccess ? tokenData!.price : 0;

    const calcPrices = (wei: number) => {
        let gwei = wei / (10 * 10**8);
        if (props.id === 'op') gwei = wei / (10 * 10**5);
        const eth = gwei / (10 * 10**8);
        const usd = (eth * tokenPrice) * 21000;
        return { gwei, usd }
    }

    const renderGasMarket = isGasMarketQuerySuccess ?
    gasMarketData?.filter((gas) => gas.level !== 'custom')
    .map((gas) => {
            return <Gas
                key={nanoid()}
                level={gas.level}
                gweiPrice={calcPrices(gas.price)["gwei"]}
                usdPrice={calcPrices(gas.price)["usd"]}
            />
        }) : null

    return (
        <StyledChain className='Chain'>
            <div className='Chain-header'>
                <img className="Chain-header-logo" src={props.logo_url} alt={`${props.name} logo`} />
                <h2 className="Chain-header-name">{props.name}</h2>
            </div>
            <div className="Chain-gasPrices">
                {renderGasMarket}
            </div>
        </StyledChain>
    );
}

const StyledChain = styled.div`
    position: relative;
    background: ${props => props.theme.colors.gradient.dark};
    padding: ${props => props.theme.space.delta};
    margin-bottom: ${props => props.theme.space.delta};
    border-radius: ${props => props.theme.borrad.beta};
    border: solid 1px ${props => props.theme.colors.dark};
    max-width: 20rem;
    @media screen and (min-width: ${props => props.theme.breakpoints.eta}) {
        max-width: 22.5rem;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.eta}) {
        max-width: 25rem;
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
                background-color: ${props => props.theme.colors.lightgrey};
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
    }
`

export default Chain;
