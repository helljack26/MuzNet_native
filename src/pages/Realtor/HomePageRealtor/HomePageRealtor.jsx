import React from 'react';
import { useRef, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useCatalogApiStore } from '@/stores/CatalogApi';

import F from '@/res/fonts'
import { StyleSheet, ScrollView, Text } from 'react-native';

import CategoriesBarRealtor from '@/components/CategoriesBarRealtor/CategoriesBarRealtor';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';

export default function HomePageRealtor() {
    const percentButton = <PercentButton isBig={false} isRecommendation={true} />
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
            setCatalog('Объявления Realtor')
        }
    }, [route]);
    return (
        <ScrollView
            ref={scrollViewRef}
            style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBarRealtor />
                <Text style={styles.mainHeader}>
                    Рекомендации для вас
                </Text>
                <CatalogBlock percentButton={percentButton} />
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
        fontFamily: F.regular,
    },
    mainHeader: {
        fontSize: 20,
        fontFamily: F.medium,
        marginTop: 15,
        marginLeft: 15
    }
})