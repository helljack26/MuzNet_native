import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { apiMocks } from '@/api/mock/apiMocks'

// Components
import CardScreen from '@/components/CardScreen'

// Styles
import styled from 'styled-components/native';
import C from '@/res/colors'

const Container = styled.View`
height: 100%;
width: 100%;
background-color: ${C.white};
padding-bottom: 80px;
`;

const ContractorAdsCardScreen = () => {
    const route = useRoute();
    const { adsId } = route.params;

    const contractorAdData = apiMocks.ContractorAdsMockApi.find((ad) => ad.id === Number(adsId) && ad);

    return (
        <SafeAreaView>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />
            <CardScreen
                routeId={adsId}
                data={contractorAdData} />
        </SafeAreaView>
    )
}

export default ContractorAdsCardScreen;