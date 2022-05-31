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
background-color: ${C.black};
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
const DisableBtn = styled.View`
width: 100%;
height: 56px;
background-color: ${C.lightGray};
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
const BlackBtnTextDisable = styled.Text`
font-size: 17px;
font-family: ${F.medium};
color: #5C6574;
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
const GoBackButton = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
position: absolute;
padding-left: 5px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 10px;
top: 0px;
left: -10px;
bottom: 0px;
`;
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
font-size: 17px;
font-family: ${F.regular};
color: ${C.black};
line-height: 22px;
`
const MediumText17 = styled.Text`
font-size: 17px;
font-family: ${F.medium};
color: ${C.black};
line-height: 22px;
`
const ErrorMessage = styled.Text`
color: ${C.red};
font-family: ${F.regular};
font-size: 13.5px;
position:absolute;
bottom:-22px ;
left:0px ;
`;
// Input
const FormInputBlock = styled.View`
display: flex;
flex-direction: column;
margin-bottom: 13px;
width: 100%;
`;
const FormInput = styled.TextInput`
width: 100%;
background-color: white;
font-family: ${F.regular};
border: 1px solid ${C.lightGray};
color: ${C.black};
border-style: solid;
border-radius: 6px;
height:48px;
font-size: 17px;
padding-left: 16px;
padding-top: ${props => props.inputLabel === true ? 17 + 'px' : 0 + 'px'};
padding-right: ${props => props.isPassword === true ? 50 + 'px' : 16 + 'px'};
`;
const FormInputLabel = styled.Text`
font-family: ${F.regular};
margin-bottom: 5px;
color: ${C.sBlack};
color : ${props => props.isError ? C.red : C.sBlack};

font-size: 12px;
position: absolute;
top: 5px;
left: 16px;
opacity: ${props => props.inputLabel === true ? 1 : 0};
`;
const ShowPasswordIconButton = styled.TouchableOpacity`
position: absolute;
top: 0px;
right:0px;
width : 55px;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
export const M = {
    MainContainer: MainContainer,
    // Buttons
    BlackBtn: BlackBtn,
    DisableBtn: DisableBtn,
    BlackBtnText: BlackBtnText,
    BlackBtnTextDisable: BlackBtnTextDisable,

    BorderBtn: BorderBtn,
    BorderBtnText: BorderBtnText,
    TextBtn: TextBtn,
    TextBtnText: TextBtnText,
    GoBackButton: GoBackButton,
    // Text
    Title28: Title28,
    Title20: Title20,
    PlainText17: PlainText17,
    MediumText17: MediumText17,
    ErrorMessage: ErrorMessage,

    // Input
    FormInputBlock: FormInputBlock,
    FormInput: FormInput,
    FormInputLabel: FormInputLabel,
    ShowPasswordIconButton: ShowPasswordIconButton,
}