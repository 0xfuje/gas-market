import React from 'react';
import { IChain, IToken } from '../types';
import { useGetTokenQuery } from '../features/api/apiSlice';

function Chain(props: IChain) {

    return <div className='Chain'>
        <h2>{props.name}</h2>
    </div>;
}

export default Chain;
