import React from 'react';
import { IGas, IGasLevel, IGasLevelEmoji } from '../types'
import styled from 'styled-components';

function Gas(props: IGas) {
    const gwei = `${props.gweiPrice.toFixed(1)} gwei`;
    const usd = `${props.usdPrice.toFixed(3)}$`
    const speedEmoji: IGasLevelEmoji = () =>  {
        if (props.level === 'custom') return undefined;
        if (props.level === 'slow') return '🚲' ;
        if (props.level === 'normal') return '🏍️';
        if (props.level === 'fast') return '🚀';
    }

    return (
        <StyledGas className='Gas'>
            <span className="Gas-level">{props.level} {speedEmoji()}</span>
            <span className="Gas-usdPrice">{usd}</span>
            <span className="Gas-gweiPrice">{gwei}</span>
        </StyledGas>
    );
}

const StyledGas = styled.div`
    display: flex;
    padding: ${props => props.theme.space.epsilon} ${props => props.theme.space.epsilon};
    flex-direction: column;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.lightgrey};
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

export default Gas;
