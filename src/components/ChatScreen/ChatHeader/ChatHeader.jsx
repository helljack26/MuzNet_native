import React from "react";
// Components
import GoBack from '@/components/Buttons/GoBack/GoBack'
// Variables
import C from '@/res/colors'
// Styles
import { style } from './style'
const {
    Header,
    HeaderWhiteBlock,
    HeaderClose,
    HeaderUserName,
    HeaderUser,
    HeaderUserImgBlock,
    HeaderUserImg,
    HeaderOptions,
    HeaderOptionsDots,
} = style;

// Store
import { observer } from 'mobx-react-lite';

const ChatHeader = observer(({ chatUserName, chatUserImg }) => {

    return (
        <>
            <HeaderWhiteBlock></HeaderWhiteBlock>
            <Header>
                <HeaderClose>
                    <GoBack />
                </HeaderClose>

                <HeaderUser>
                    <HeaderUserImgBlock>
                        <HeaderUserImg source={chatUserImg} resizeMode={'cover'} />
                    </HeaderUserImgBlock>
                    <HeaderUserName>
                        {chatUserName}
                    </HeaderUserName>
                </HeaderUser>

                <HeaderOptions>
                    <HeaderOptionsDots></HeaderOptionsDots>
                    <HeaderOptionsDots></HeaderOptionsDots>
                    <HeaderOptionsDots></HeaderOptionsDots>
                </HeaderOptions>
            </Header>
        </>

    );
})

export default ChatHeader;