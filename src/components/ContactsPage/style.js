import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled(M.MainContainer)`
`;
const HeaderText = styled(M.HeaderH1)`
font-size: 22.5px;
margin-bottom: 16px;
`;

const ContainerLeftBlock = styled.View`
margin-top: 48px;
display: flex;
flex-direction: column;
`;

const HeaderSubscription = styled.Text`
line-height: 22px;
font-family: ${F.light};
margin-bottom: 24px;
font-size: 13px;
`;

const HeaderLinks = styled.View`
width: 100%;
margin-bottom: 16px;
`;
const Link = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding: 12px 0px;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;
border-radius: 4px;
margin-bottom: 8px;
width: 100%;
`;
const PhoneLink = styled(Link)`

`;
const MailLink = styled(Link)`

`;
const LinkText = styled.Text`
font-size: 13.5px;
font-family: ${F.light};
color: ${C.mainBlack};
margin-left: 11px;
`;
const ContainerRightBlock = styled.View`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${C.backgroundGray};
border-radius: 8px;
overflow: hidden;
padding: 24px 17px;   
margin-top: 16px;
margin-bottom: 48px;
`;
const SuccessWindow = styled.View`
width: 100%;
height: 100%;
background-color: ${C.mainBlue};
z-index: 800;
position: absolute;
border-radius:8px;
top: 17px;
bottom: 17px;
left: 17px;
right: 17px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
color: white;
`;
const SuccessWindowText = styled.Text`
font-size: 20px;
font-family: ${F.medium};
color: white;
padding: 0px 0px;
margin: 0px 0px;
`;
const FormInputBlock = styled.View`
display: flex;
flex-direction: column;
margin-bottom: 24px;
width: 100%;
`;

const FormInputLabel = styled.Text`
font-size: 13.5px;
font-family: ${F.light};
color: ${C.secondBlack};
margin-bottom: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const FormInput = styled.TextInput`
padding-left: 10px;
padding-right: 10px;
width: 100%;
background-color: white;
font-family: ${F.light};
color: ${C.mainBlack};
border-color: ${C.borderDarkGray};
border-width: 1px;
border-style: solid;
border-radius: 4px;
height:45px;
font-size: 16px;
`;
const FormTextArea = styled.TextInput`
font-size: 16px;
padding: 7px 10px;
background-color: white;
font-family: ${F.light};
color: ${C.mainBlack};
border-color: ${C.borderDarkGray};
border-width: 1px;
border-style: solid;
border-radius: 4px;
height: 112px;
`;
const ButtonSubmit = styled(M.ButtonBlue)`
width: 100%;
margin-top: 10px;
`;
const ButtonSubmitText = styled(M.ButtonBlueText)`
color: white;
`;
const ErrorMessage = styled.Text`
color: red;
font-size: 13.5px;
margin-left: 10px;
`;

export const style = {
    Container: Container,
    HeaderText: HeaderText,
    ContainerLeftBlock: ContainerLeftBlock,
    HeaderSubscription: HeaderSubscription,
    HeaderLinks: HeaderLinks,
    PhoneLink: PhoneLink,
    MailLink: MailLink,
    LinkText: LinkText,
    ContainerRightBlock: ContainerRightBlock,
    FormTextArea: FormTextArea,
    FormInputBlock: FormInputBlock,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    ErrorMessage: ErrorMessage,
    SuccessWindow: SuccessWindow,
    SuccessWindowText: SuccessWindowText,
}