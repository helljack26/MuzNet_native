import React from "react";
// Components
import GoBack from '@/components/Buttons/GoBack/GoBack'
// Variables
import C from '@/res/colors'
// Styles
import { style } from './style'
const {
    Header,
    HeaderRow,
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

const ChatHeader = observer(({ chatUserName, chatUserImg, setOpenBlockUserPopup, setOpenSharedScreen }) => {

    return (
        <Header>
            <HeaderWhiteBlock></HeaderWhiteBlock>
            <HeaderRow>
                <HeaderClose>
                    <GoBack />
                </HeaderClose>

                <HeaderUser
                    onPress={() => {
                        setOpenSharedScreen(true)
                    }}
                >
                    <HeaderUserImgBlock>
                        <HeaderUserImg source={chatUserImg} resizeMode={'cover'} />
                    </HeaderUserImgBlock>
                    <HeaderUserName>
                        {chatUserName}
                    </HeaderUserName>
                </HeaderUser>

                <HeaderOptions
                    onPress={() => {
                        setOpenBlockUserPopup(true)
                    }}
                >
                    <HeaderOptionsDots></HeaderOptionsDots>
                    <HeaderOptionsDots></HeaderOptionsDots>
                    <HeaderOptionsDots></HeaderOptionsDots>
                </HeaderOptions>
            </HeaderRow>

        </Header>
    );
})

export default ChatHeader;