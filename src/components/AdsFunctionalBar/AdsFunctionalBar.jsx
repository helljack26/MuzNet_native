import C from '@/res/colors'
import React from 'react';

import { StyleSheet, View } from 'react-native';

import Breadcrumbs from '@/components/Breadcrumbs'
import AdsPageTitle from './AdsPageTitle'
import AdsButtonsObjectComplex from './AdsButtonsObjectComplex'
import AdsFilterBar from './AdsFilterBar'
import AdsButtonBar from './AdsButtonBar'

import PageLocation from '@/components/helpers/pageLocation'

const AdsFunctionalBar = () => {
    const { title } = PageLocation();
    const isShowObjectComplexButtons = title === 'Дома' || title === 'Квартиры'

    return (
        <>
            <View style={styles.adsFunctionalBar}>
                <Breadcrumbs />
                <AdsPageTitle />

                {isShowObjectComplexButtons && <AdsButtonsObjectComplex />}

                <AdsFilterBar />
            </View>
            <AdsButtonBar />
        </>
    )
}

export default AdsFunctionalBar;

const styles = StyleSheet.create({
    adsFunctionalBar: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 18,
        backgroundColor: C.backgroundGray,
    },
});
