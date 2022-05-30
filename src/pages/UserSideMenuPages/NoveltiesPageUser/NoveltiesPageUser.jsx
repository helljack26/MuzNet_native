import F from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import NoveltiesFunctionalBar from './NoveltiesFunctionalBar';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';

export default function NoveltiesPageUser() {
    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <NoveltiesFunctionalBar />
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

