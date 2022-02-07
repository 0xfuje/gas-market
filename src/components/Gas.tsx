import React from 'react';
import { IGas } from '../types'

function Gas(props: IGas) {
    return (
        <div className='Gas'>
            <span className="Gas-level">{props.level} - </span>
            <span className="Gas-gweiPrice">{props.gweiPrice} - </span>
            <span className="Gas-usdPrice">{props.usdPrice}</span>
        </div>
    );
}

export default Gas;
