import React from 'react';
import { useRef, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useCatalogApiStore } from '@/stores/CatalogApi';

import F from '@/res/fonts'
import { StyleSheet, ScrollView, Text } from 'react-native';

import CategoriesBar from '@/components/CategoriesBar/CategoriesBar';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';

export default function HomePageUser() {
    const route = useRoute();
    const scrollViewRef = useRef(null)
    const { setCatalog } = useCatalogApiStore();

    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: false })
        }
    }
    useEffect(() => {
        if (route) {
            scrollTop()
            setCatalog('Объявления User')
        }
    }, [route]);

    return (
        <ScrollView
            ref={scrollViewRef}
            style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBar />
                <Text style={styles.mainHeaderUser}>
                    Рекомендации для вас
                </Text>
                <CatalogBlock isRecommendation={true} />
            </ScrollView>
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
    mainHeaderUser: {
        fontSize: 20,
        fontFamily: F.medium,
        marginTop: 15,
        marginLeft: 15
    }
})