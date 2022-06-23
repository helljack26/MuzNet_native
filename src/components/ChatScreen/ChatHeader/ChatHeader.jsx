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

const ChatHeader = observer(({ chatUserName, chatUserImg }) => {

    return (
        <>
            <Header>
                <HeaderWhiteBlock></HeaderWhiteBlock>
                <HeaderRow>
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
                </HeaderRow>

            </Header>
        </>

    );
})

export default ChatHeader;