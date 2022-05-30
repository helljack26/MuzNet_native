import React from "react";
import F from '@/res/fonts'
import IMAGES from '@/res/images'

// Styles
import styled from "styled-components";

const { ComplainIcon } = IMAGES;

const Complain = styled.View`
width: 100%;
margin-top: 12px;
margin-bottom: 40px;
align-items: flex-end;
`
const ComplainLinkBlock = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
`
const ComplainLinkText = styled.Text`
font-size: 13px;
font-family: ${F.light};
color: #d30000;
margin-left: 5px;
`
const ComplainLink = () => {
    return (<Complain>
        {/* TODO сделать ссылку на пожаловаться */}
        <ComplainLinkBlock>
            <ComplainIcon width='14px' />
            <ComplainLinkText>Пожаловаться</ComplainLinkText>
        </ComplainLinkBlock>
    </Complain>
    )
}
export default ComplainLink; 