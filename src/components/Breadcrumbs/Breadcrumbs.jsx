import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageLocation from '@/components/helpers/pageLocation'

import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';

import F from '@/res/fonts'
import C from '@/res/colors'
import IMAGES from '@/res/images'

import styled from 'styled-components/native';
const { ArrowLeft } = IMAGES;
// Styles
const GoBack = styled.TouchableOpacity`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 15px;
`;

const Breadcrumbs = observer(({ goBack }) => {
    const { title, ads, isRealtor } = PageLocation();
    const navigation = useNavigation();

    const { setCatalog } = useCatalogApiStore();

    // Reset catalog when press Обьявления
    const combine = () => {
        setCatalog('Объявления User'), navigation.navigate('Объявления User')
    }
    const combineRealtor = () => {
        setCatalog('Объявления Realtor'), navigation.navigate('Объявления Realtor')
    }
    // For catalog
    const isAds = ads &&
        <View style={styles.breadcrumbs}>
            <TouchableOpacity onPress={() => combine()}>
                <Text style={styles.ads}>Объявления&nbsp; | &nbsp;</Text>
            </TouchableOpacity>
            <Text style={styles.page}>{title}</Text>
        </View>;

    const isAdsRealtor = ads &&
        <View style={styles.breadcrumbs}>
            <TouchableOpacity onPress={() => combineRealtor()}>
                <Text style={styles.ads}>Объявления&nbsp; | &nbsp;</Text>
            </TouchableOpacity>
            <Text style={styles.page}>{title}</Text>
        </View>;

    //For card goBack 
    const isGoBack = goBack &&
        <GoBack
            style={styles.breadcrumbs_goBack}
            onPress={() => navigation.goBack(null)}
        >
            <ArrowLeft />
            <Text style={styles.goBack}>Вернуться назад</Text>
        </GoBack>

    const isGoBackRealtor = goBack &&
        <GoBack
            style={styles.breadcrumbs_goBack}
            onPress={() => navigation.goBack(null)}>
            <ArrowLeft />
            <Text style={styles.goBack}>Вернуться назад</Text>
        </GoBack>

    const breadcrumbs = !goBack ? isAds : isGoBack
    const breadcrumbsRealtor = !goBack ? isAdsRealtor : isGoBackRealtor

    return isRealtor ? breadcrumbsRealtor : breadcrumbs
})
export default Breadcrumbs;

const styles = StyleSheet.create({
    goBack: {
        marginLeft: 10,
        color: C.mainBlack,
        fontSize: 12,
        fontFamily: F.light
    },
    breadcrumbs: {
        flex: 2,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    breadcrumbs_goBack: {
        width: '40%',

    },
    ads: {
        fontSize: 12,
        fontFamily: F.regular,
        color: C.secondBlack,
    },
    page: {
        fontSize: 12,
        fontFamily: F.regular,
        color: C.mainBlack,
    }
})