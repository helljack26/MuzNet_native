import React from "react";
import { useEffect } from 'react';

import { useCollectionsApiStore } from "@/stores/collectionsStore";

import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import CollectionItem from './CollectionItem/CollectionItem'

import PageLocation from '@/components/helpers/pageLocation'

// Styles
import { style } from './style'
const {
    Container,
    AdsHeader,
    AdsHeaderText,
    CollectionsEmptyText,
    AdsQueryNumber,
    CollectionsContainer,
} = style;

const CollectionsPageRealtor = observer(() => {
    const { title } = PageLocation();
    const { collections, setCollections } = useCollectionsApiStore();

    const collectionsData = toJS(collections);
    const isCollections = collectionsData ? collectionsData : [];
    const numberOfCollection = collectionsData !== undefined && collectionsData.length

    // const numberOfCollection = 0
    useEffect(() => {
        setCollections();
    }, []);

    return (
        <Container>

            <AdsHeader>
                <AdsHeaderText>{title}</AdsHeaderText>
                {numberOfCollection > 0 && <AdsQueryNumber>{numberOfCollection} подборки</AdsQueryNumber>}
            </AdsHeader>

            <CollectionsContainer>
                {numberOfCollection > 0 ?
                    isCollections.map((item, id) => <CollectionItem data={item} key={id} />)
                    :
                    <CollectionsEmptyText>У вас пока ни одной подборки</CollectionsEmptyText>
                }
            </CollectionsContainer>

        </Container>
    )
})

export default CollectionsPageRealtor;