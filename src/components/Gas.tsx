import React from 'react';
import { IGas, IGasLevel, IGasLevelEmoji } from '../types'
import styled from 'styled-components';
import { Spinner } from './Loaders';

function Gas(props: IGas) {
    const precisizePrice = (usd: number) => {
        if (usd > 1) return usd.toFixed(2);
        if (usd >= 0.01) return usd.toFixed(3);
        if (usd < 0.01) return usd.toFixed(4);
    }
    const speedEmoji: IGasLevelEmoji = () =>  {
        if (props.level === 'custom') return undefined;
        if (props.level === 'slow') return '🚲' ;
        if (props.level === 'normal') return '🏍️';
        if (props.level === 'fast') return '🚀';
    }


    const gwei = `${props.gweiPrice!.toFixed(1)} gwei`;
    const usd = `${precisizePrice(props.usdPrice!)}$`
        
    
    return (
        <StyledGas className='Gas'>
            <span className="Gas-level">{props.level} {speedEmoji()}</span>
            <span className="Gas-usdPrice">{usd}</span>
            <span className="Gas-gweiPrice">{gwei}</span>
        </StyledGas>
    );
}

function GasLoading() {
    return (
        <StyledGas className='Gas'>
            <Spinner />
        </StyledGas>
    );
}

export const StyledGas = styled.div`
    display: flex;
    padding: ${props => props.theme.space.epsilon} ${props => props.theme.space.epsilon};
    flex-direction: column;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.darkgrey};
    border-radius: ${props => props.theme.borrad.gamma};
    @media screen and (min-width: ${props => props.theme.breakpoints.eta}) {
        padding: ${props => props.theme.space.epsilon} ${props => props.theme.space.delta}
    }
    .Gas {
        &-level {
            font-size: ${props => props.theme.font.size.delta};
            color: ${props => props.theme.colors.lightgrey};
            text-transform: uppercase;
            margin-bottom: ${props => props.theme.space.zeta};
        }
        &-usdPrice {

        }
        &-gweiPrice {
            font-size: ${props => props.theme.font.size.delta};
            color: ${props => props.theme.colors.lightgrey};
        }
    }
`



export default GasLoading;

export { Gas, GasLoading };
