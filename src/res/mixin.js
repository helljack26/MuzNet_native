import styled from 'styled-components/native';

import C from '@/res/colors'
import F from '@/res/fonts'

const MainContainer = styled.ScrollView`
width: 100%;
display: flex;
flex-direction: column;
background-color: white;
padding: 0px 20px;
`;

// Buttons
const BlackBtn = styled.TouchableOpacity`
width: 100%;
height: 56px;
background-color:${C.black};
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
const BlackBtnText = styled.Text`
font-size: 17px;
font-family: ${F.medium};
color: ${C.white};
line-height: 22px;
`
const BorderBtn = styled.TouchableOpacity`
width: 100%;
height: 56px;
background-color:${C.white};
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
border: 1px solid ${C.black};
`
const BorderBtnText = styled.Text`
font-size: 17px;
font-family: ${F.medium};
color: ${C.black};
line-height: 22px;
`
const TextBtn = styled.TouchableOpacity`
display: flex;
align-items: center;
flex-direction: row;
`
const TextBtnText = styled.Text`
font-size: 20px;
font-family: ${F.medium};
color: ${C.black};
line-height: 25px;
`

// Text
const Title28 = styled.Text`
font-size: 28px;
font-family: ${F.extraBlack};
color: ${C.black};
line-height: 35px;
`
const Title20 = styled.Text`
font-size: 20px;
font-family: ${F.extraBlack};
color: ${C.black};
line-height: 25px;
`
const PlainText17 = styled.Text`
font-size: 19px;
font-family: ${F.regular};
color: ${C.black};
line-height: 22px;
`

export const M = {
    MainContainer: MainContainer,
    // Buttons
    BlackBtn: BlackBtn,
    BlackBtnText: BlackBtnText,

    BorderBtn: BorderBtn,
    BorderBtnText: BorderBtnText,
    TextBtn: TextBtn,
    TextBtnText: TextBtnText,
    // Text
    Title28: Title28,
    Title20: Title20,
    PlainText17: PlainText17,
}