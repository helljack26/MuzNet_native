import React from 'react';
import { useState } from 'react'

import IMAGES from '@/res/images'
const { ArrowDownIcon, HeartDefault, HeartActive } = IMAGES;

// Styles
import { styles } from './styles.js'
const {
    Container,
    SortButton,
    FavoriteButton,
    Title,
    SortValue,
} = styles;

const AdsButtonBar = () => {
    const [type, setType] = useState(false);
    const sortValue = 'по умолчанию  '

    return (
        <Container>
            <SortButton>
                <Title>Сортировка:
                    <SortValue>
                        {sortValue}
                    </SortValue>
                    <ArrowDownIcon />
                </Title>
            </SortButton>
            <FavoriteButton
                onPress={() => {
                    return setType(type ? false : true)
                }}>
                {!type ?
                    <HeartDefault width={14} height={15} />
                    :
                    <HeartActive width={14} height={15} />}
            </FavoriteButton>
        </Container>
    )
}
export default AdsButtonBar;
