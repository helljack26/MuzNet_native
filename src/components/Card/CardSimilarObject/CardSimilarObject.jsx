import { styles } from './style.js'
import React from 'react';

const {
    Similar,
    Similar_header,
    Similar_block
} = styles;

import CatalogBlockItem from '@/components/CatalogBlockItem/CatalogBlockItem'
import { SimilarMockApi } from '@/api/mock/SimilarMockApi.jsx'

const CardSimilarObject = ({percentButton}) => {

    const data = SimilarMockApi;
    return (
        <Similar>
            <Similar_header >Похожие объекты</Similar_header>
            <Similar_block >
                {data.map((item,id) => 
                <CatalogBlockItem 
                data={item} 
                key={id} 
                percentButton={percentButton} 
                />)}
            </Similar_block>
        </Similar>
    )
}

export default CardSimilarObject;