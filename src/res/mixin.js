import styled from 'styled-components/native';

import C from '@/res/colors'
import F from '@/res/fonts'

const MainContainer = styled.ScrollView`
width: 100%;
display: flex;
flex-direction: column;
background-color: white;
padding: 0px 4%;
`;

const HeaderH1 = styled.Text`
font-size: 23px;
font-weight: 100;
font-family: ${F.medium};
color: ${C.mainBlack};
`

const ButtonBlue = styled.TouchableOpacity`
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 36px;
background-color: ${C.mainBlue};
color:white;
`
const ButtonBlueText = styled.Text`
font-size: 13.5px;
color: white;
font-family: ${F.medium};
font-weight: 100;
`
const ErrorMessage = styled.Text`
color: red;
font-size: 13.5px;
position:absolute;
bottom:-18px ;
left:0px ;
`;

export const M = {
    MainContainer: MainContainer,
    HeaderH1: HeaderH1,
    ButtonBlue: ButtonBlue,
    ButtonBlueText: ButtonBlueText,
    ErrorMessage: ErrorMessage,
}