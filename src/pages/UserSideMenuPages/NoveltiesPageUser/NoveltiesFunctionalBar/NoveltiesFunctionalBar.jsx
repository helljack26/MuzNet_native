import C from '@/res/colors'
import React from 'react';

import { StyleSheet, View } from 'react-native';

import Breadcrumbs from '@/components/Breadcrumbs'
import NoveltiesPageTitle from './NoveltiesPageTitle'
import GalleryMapButton from './GalleryMapButton'
import SortButtonBar from './SortButtonBar'

const NoveltiesFunctionalBar = () => {
    return (
        <>
            <View style={styles.adsFunctionalBar}>
                <Breadcrumbs />
                <NoveltiesPageTitle />
                <GalleryMapButton />
            </View>
            <SortButtonBar />
        </>
    )
}

export default NoveltiesFunctionalBar;

const styles = StyleSheet.create({
    adsFunctionalBar: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 18,
        backgroundColor: C.backgroundGray,
    },
});
