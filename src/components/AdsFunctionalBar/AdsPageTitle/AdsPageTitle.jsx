import C from '@/res/colors'
import F from '@/res/fonts'
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';
import PageLocation from '@/components/helpers/pageLocation'

const AdsPageTitle = observer(({ city = 'Киеве' }) => {
    const { catalog } = useCatalogApiStore();
    const objectInCatalog = catalog !== undefined && catalog.length
    const { title } = PageLocation();

    return (<View >
        <View style={styles.adsHeaderBlock}>
            <Text style={styles.adsHeader}>{title} в {city}</Text>
        </View>
        <View>
            <Text style={styles.adsQueryNumber}>{objectInCatalog}
                <Text style={styles.adsQueryNumber}> объектов</Text>
            </Text>
        </View>
    </View>
    )
})
export default AdsPageTitle;

const styles = StyleSheet.create({
    adsHeaderBlock: {
        flex: 1,
        flexDirection: 'row',
    },
    adsHeader: {
        fontFamily: F.medium,
        color: C.mainBlack,
        fontSize: 20,
        marginTop: 32,
        marginBottom: 4,
    },
    adsQueryNumber: {
        fontSize: 12,
        color: C.mainBlack,
        marginBottom: 20,

    }
});
