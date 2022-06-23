import React from 'react';
import { StatusBar } from 'react-native';
import { useState, useEffect } from 'react';

// import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Components
import ChatScreen from '@/components/ChatScreen'
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

const ContractorChatScreen = () => {

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />

            <Container >
                <ChatScreen isContractor={true} />

            </Container>
        </>

    )
}

export default ContractorChatScreen;