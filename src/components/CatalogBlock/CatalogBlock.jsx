import React from 'react';
import { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IMAGES from '@/res/images'

import CatalogBlockItem from '../CatalogBlockItem/CatalogBlockItem'

import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';

// Styles
// import { styleCatalogBlock } from './styleCatalogBlock'
import { styleRecommendationBlock } from './styleRecommendationBlock'

const CatalogBlock = observer(({ percentButton }) => {
    // StyleSheet defined
    // const style = isRecommendation !== undefined ? styleRecommendationBlock : styleCatalogBlock;
    const { isGallery, catalog, setCatalog } = useCatalogApiStore();
    const navigation = useNavigation();

    const {
        Main,
        MainBlock
    } = styleRecommendationBlock;

    const route = useRoute();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setCatalog(route.name);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <>
            {isGallery &&
                <Main>
                    <MainBlock>
                        {catalog.map((item, id) =>
                            <CatalogBlockItem
                                data={item}
                                key={id}
                                isRecommendation={true}
                                percentButton={percentButton}
                            />)}
                    </MainBlock>
                </Main>}
            {isGallery === false &&
                <Image
                    style={{ width: '100%' }}
                    source={IMAGES.map_template} />
            }
        </>
    )
})

export default CatalogBlock;