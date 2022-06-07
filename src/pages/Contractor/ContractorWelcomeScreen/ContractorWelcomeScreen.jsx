import React from 'react';
import { StatusBar } from 'react-native';
import { useState, useEffect } from 'react';

// import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { getWindowDimension } from '@/components/helpers/getWindowDimension'

import MainScreen from '@/components/MainScreen'
import TapbarMenu from '@/components/Buttons/TapbarMenu'

// Styles
import styled from 'styled-components/native';
import C from '@/res/colors'

const Container = styled.View`
height: 100%;
width: 100%;
background-color: ${C.white};
padding-bottom: 82px;
`;
const Content = styled.ScrollView`
padding: 0px 20px;
width: 100%;
`;

const ContractorWelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="white"
                translucent={true}
            />

            {/* Image */}
            <Container>
                <Content>
                    <MainScreen />
                </Content>

                <TapbarMenu />
            </Container>
        </>

    )
}

export default ContractorWelcomeScreen;