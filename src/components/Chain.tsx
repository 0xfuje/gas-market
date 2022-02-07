import { IChain } from '../types';
import { useGetTokenQuery, useGetGasMarketQuery } from '../features/api/apiSlice';
import Gas from './Gas';

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
                level={gas.level}
                gweiPrice={calcPrices(gas.price)["gwei"].toFixed(3)}
                usdPrice={calcPrices(gas.price)["usd"].toFixed(3)}
            />
        }) : null



    
    return <div className='Chain'>
        <h2>{props.name}</h2>
        {renderGasMarket}
    </div>;
}

export default Chain;
