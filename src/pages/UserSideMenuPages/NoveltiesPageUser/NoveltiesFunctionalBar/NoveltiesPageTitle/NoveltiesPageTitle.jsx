import C from '@/res/colors'
import F from '@/res/fonts'
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';


const NoveltiesPageTitle = observer(() => {
    const { catalog } = useCatalogApiStore();
    const objectInCatalog = catalog !== undefined && catalog.length

    return (<View >
        <View style={styles.adsHeaderBlock}>
            <Text style={styles.adsHeader}>Новые предложения</Text>
        </View>
        <View>
            <Text style={styles.adsQueryNumber}>{objectInCatalog}
                <Text style={styles.adsQueryNumber}> объектов</Text>
            </Text>
        </View>
    </View>
    )
})
export default NoveltiesPageTitle;

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
    }
});
