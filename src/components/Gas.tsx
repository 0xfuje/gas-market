import React from 'react';
import { IGas } from '../types'

function Gas(props: IGas) {
    const gwei = `${props.gweiPrice.toFixed(1)} gwei`;
    const usd = `${props.usdPrice.toFixed(3)}$`
    return (
        <div className='Gas'>
            <span className="Gas-level">{props.level} - </span>
            <span className="Gas-gweiPrice">{gwei} - </span>
            <span className="Gas-usdPrice">{usd}</span>
        </div>
    );
}

export default Gas;
