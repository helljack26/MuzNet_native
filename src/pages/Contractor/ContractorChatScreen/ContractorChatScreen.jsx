import React from 'react';
import { StatusBar } from 'react-native';

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Components
import ChatScreen from '@/components/ChatScreen'
import CreateOffer from '@/components/ChatScreen/ChatMessagesContractor/CreateOffer'

// Styles
import styled from 'styled-components/native';
import C from '@/res/colors'
const Block = styled.View`
width: 100%;
`
const Container = styled.View`
height: 100%;
width: 100%;
background-color: ${C.white};
`;

const ContractorChatScreen = () => {
    const { windowHeight, windowWidth } = getWindowDimension()

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />

            <Container
                style={{
                    width: windowWidth,
                    height: windowHeight,
                }}  >
                <ChatScreen isContractor={true} />

                <CreateOffer />
            </Container>

        </>

    )
}

export default ContractorChatScreen;