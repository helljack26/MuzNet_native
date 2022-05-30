import React from 'react';

import { useState } from 'react'

import CatalogBlockItem from '@/components/CatalogBlockItem/CatalogBlockItem'
import FavoriteSearchItem from './FavoriteSearchItem/FavoriteSearchItem'

import PageLocation from '@/components/helpers/pageLocation'

import { ApartmentMockApi } from '@/api/mock/ApartmentMockApi'
import { FavoriteSearchMock } from '@/api/mock/FavoriteSearchMock'

// Styles
import { style } from './style'
const {
    Container,
    FavoriteItemContainer,
    FavoriteSearchContainer,
    Header,
    HeaderText,
    FavoriteSwithBlock,
    ItemButton,
    SearchButton,
    ButtonTextMobile,
} = style;


export default function FavoritePage() {
    const { title } = PageLocation();
    const [isItemBlock, setItemBlock] = useState(true);
    const itemsInFavorite = 0;
    const searchesInFavorite = 0;

    return (
        <Container>
            <Header>
                <HeaderText>{title}</HeaderText>
                {/* Button */}
                <FavoriteSwithBlock>
                    <ItemButton
                        isActive={isItemBlock}
                        onPress={() => setItemBlock(true)}
                        type='button'>
                        <ButtonTextMobile isActive={isItemBlock}>
                            Объявления ({itemsInFavorite})
                        </ButtonTextMobile>
                    </ItemButton>
                    <SearchButton
                        isActive={!isItemBlock}
                        onPress={() => setItemBlock(false)}
                        type='button'>
                        <ButtonTextMobile isActive={!isItemBlock}>
                            Поиски ({searchesInFavorite})
                        </ButtonTextMobile>
                    </SearchButton>
                </FavoriteSwithBlock>
            </Header>
            {/* Favotite Blocks */}
            {isItemBlock === true ?
                // Item
                <FavoriteItemContainer>
                    {ApartmentMockApi.map((item, id) => {
                        if (id === 3) return
                        return <CatalogBlockItem
                            data={item}
                            key={id}
                        />
                    })}
                </FavoriteItemContainer>
                :
                // Search
                <FavoriteSearchContainer>
                    {FavoriteSearchMock.map((item, id) => <FavoriteSearchItem data={item} key={id} />)}
                </FavoriteSearchContainer>
            }
        </Container>
    )
}

