import F from '@/res/fonts'

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';


import Breadcrumbs from '@/components/Breadcrumbs'
import CardPhotoContainer from '@/components/Card/CardPhotoContainer/CardPhotoContainer'
import CardDetailsContainer from '@/components/Card/CardDetailsContainer/CardDetailsContainer'
import CardAgentContainer from '@/components/Card/CardAgentContainer/CardAgentContainer'
import CardSimilarObject from '@/components/Card/CardSimilarObject/CardSimilarObject'

import styled from 'styled-components/native';
const Main = styled.ScrollView`
width: 100%;
background-color: white;
padding: 0px 4%;

`;

import { apiMocks } from '@/api/mock/apiMocks'

export default function CardPageUser() {
    const route = useRoute();
    const { itemId, category } = route.params;
    const scrollViewRef = useRef(null)

    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: false })
        }
    }
    if (itemId) {
        scrollTop()
    }

    const whichCatalog = (catalogName) => {
        switch (catalogName) {
            case 'apartments':
                return apiMocks.ApartmentMockApi;
            case 'houses':
                return apiMocks.HousesMockApi;
            case 'plots':
                return apiMocks.PlotMockApi;
            case 'commerce':
                return apiMocks.CommerceMockApi;
            case 'rent':
                return apiMocks.RentMockApi;
            default:
                break;
        }
    }
    const catalogDefined = whichCatalog(category)
    const objectDetails = catalogDefined.find((item) => item.id === Number(itemId) && item);

    const { id, imagePath } = objectDetails;
    return (<SafeAreaView style={styles.body}>

        <Main
            ref={scrollViewRef}
            horizontal={false}>
            <Breadcrumbs goBack={true} />
            <CardPhotoContainer photoCollection={imagePath} />
            <CardDetailsContainer details={objectDetails} complexPath={'ApartmentsComplexPage'} isRent={objectDetails.isRent} />
            <CardAgentContainer agentId={id} />
            <CardSimilarObject />
        </Main>
    </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: F.regular,
    },
})