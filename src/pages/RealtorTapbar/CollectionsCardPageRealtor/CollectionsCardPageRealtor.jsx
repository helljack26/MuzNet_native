import F from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { apiMocks } from '@/api/mock/apiMocks'

import Breadcrumbs from '@/components/Breadcrumbs'
import CatalogBlockItem from '@/components/CatalogBlockItem/CatalogBlockItem';
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';

import IMAGES from '@/res/images';
const { ShareIcon } = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    FunctionalBar,
    FunctionalBarBlockTitle,
    FunctionalBarText,
    FunctionalBarNumber,
    FunctionalBarBlock,
    FunctionalBarBlockButton,
    FunctionalBarBlockButtonText,
    CollectionsContainer,
} = style;

export default function CollectionsCardPageRealtor() {
    const route = useRoute();
    const { collectionId } = route.params;

    const collectionsApi = apiMocks.CollectionsMockApi;

    const collectionCard = collectionsApi.find((item) => item.collectionId === Number(collectionId) && item);

    const {
        collectionName,
        collectionItems,
    } = collectionCard;
    const objectInCollection = collectionItems !== undefined && collectionItems.length
    const percentButton = <PercentButton isBig={false} />
    return (
        <ScrollView style={styles.body}>
            <FunctionalBar>
                <Breadcrumbs goBack={true} />
                <FunctionalBarBlock>

                    <FunctionalBarBlockTitle>
                        <FunctionalBarText>{collectionName}</FunctionalBarText>
                        {objectInCollection > 0 && <FunctionalBarNumber>{objectInCollection} объекта</FunctionalBarNumber>}
                    </FunctionalBarBlockTitle>

                    <FunctionalBarBlockButton  >
                        <ShareIcon width={12} height={12} />
                        <FunctionalBarBlockButtonText>
                            Отправить подборку
                        </FunctionalBarBlockButtonText>
                    </FunctionalBarBlockButton>

                </FunctionalBarBlock>
            </FunctionalBar>
            <Container>
                <CollectionsContainer>
                    {collectionItems.map((item, id) =>
                        <CatalogBlockItem
                            data={item}
                            key={id}
                            percentButton={percentButton}
                        />)}
                </CollectionsContainer>

            </Container>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: F.regular,
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: F.regular,
    },
})

