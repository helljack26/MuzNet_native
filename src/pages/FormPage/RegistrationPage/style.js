import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.ScrollView`
padding: 0px 30px;
width: 100%;
height: 100%;
background-color: white;
display: flex;
flex-direction: column;
`;
const HeaderText = styled(M.HeaderH1)`
margin-top: 35px;
margin-bottom: 28px;
font-size: 21px;
`;
const FormBlock = styled.View`
width: 100%;
`;

const FormInputBlock = styled.View`
display: flex;
flex-direction: column;
margin-bottom: 23px;
width: 100%;
`;
const FormInputContainer = styled.View`

`;
const FormInputLabel = styled.Text`
font-family: ${F.light};
margin-bottom: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 13px;
`;
const FormInput = styled.TextInput`
padding-left: 10px;
padding-right: 10px;
width: 100%;
background-color: white;
font-family: ${F.light};
color: ${C.mainBlack};
border-width: 1px;
border-style: solid;
border-radius: 4px;
height:45px;
font-size: 16px;
`;
const ButtonSubmit = styled(M.ButtonBlue)`
width: 100%;
margin-top: 28px;
`;
const ButtonSubmitText = styled.Text`
color: white;
font-size: 13.5px;
font-family: ${F.medium};
font-weight: 100;
`;
const ShowPasswordIconButton = styled.TouchableOpacity`
position: absolute;
top: -2px;
right:0px;
width : 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const CheckboxBlock = styled.TouchableOpacity`
height: 29px;
width: 29px;
border-width: 1px;
border-style: solid;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const Checkbox = styled.TextInput`
font-size: 13px;
font-family: ${F.light};
color: ${C.mainBlue};
`;

const AgreementBlock = styled.View`
display: flex;
align-items: flex-start;
flex-direction: row;
margin-top: 5px;
`;
const Link = styled.Pressable`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;
const LinkTextDisable = styled.Text`
font-size: 13px;
font-family: ${F.light};
color: ${C.mainBlack};
`;
const LinkText = styled.Text`
font-size: 13px;
font-family: ${F.light};
color: ${C.mainBlue};
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;
const AgreementText = styled.Text`
font-size: 13px;
line-height: 22px;
margin-top: -5px;
line-height: 16.5px;
margin-left: 8px;
font-family: ${F.light};
display: flex;
flex-direction: row;
flex-wrap: wrap;
color: ${C.mainBlack};

`;
const FooterBlock = styled.View`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 17px;
margin-bottom: 35px;

`;
const FooterText = styled.Text`
font-family: ${F.light};
color: ${C.secondBlack};
font-size: 13px;
margin-bottom: 15px;
`;
const ErrorMessage = styled.Text`
color: red;
font-family: ${F.light};
font-size: 13.5px;
position:absolute;
bottom:-18px ;
left:0px ;
`;

export const style = {
    Container: Container,
    HeaderText: HeaderText,
    FormBlock: FormBlock,
    FormInputBlock: FormInputBlock,
    FormInputContainer: FormInputContainer,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    ShowPasswordIconButton: ShowPasswordIconButton,
    Link: Link,
    LinkText: LinkText,
    LinkTextDisable: LinkTextDisable,
    AgreementBlock: AgreementBlock,
    CheckboxBlock: CheckboxBlock,
    Checkbox: Checkbox,
    AgreementText: AgreementText,
    FooterBlock: FooterBlock,
    FooterText: FooterText,
    ErrorMessage: ErrorMessage,
}