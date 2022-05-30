import React from 'react';

import F from '@/res/fonts'
import { StyleSheet, ScrollView, View } from 'react-native';

import AdsFunctionalBar from '@/components/AdsFunctionalBar/AdsFunctionalBar';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';


export default function PlotsPageUser() {

    return (
        <View style={styles.body}>

            <ScrollView
                horizontal={false}
                style={styles.container}>
                <AdsFunctionalBar />
                <CatalogBlock />
            </ScrollView>
        </View>
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