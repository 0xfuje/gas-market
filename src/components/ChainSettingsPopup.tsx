import React from 'react';
import { useGetChainsQuery } from '../features/api/debankApiSlice';



function ChainSettingsPopup() {
    const { data: chains, isSuccess } = useGetChainsQuery();
    return (
        <div className='ChainSettingsPopup'>

        </div>
    );
}

export default ChainSettingsPopup;
