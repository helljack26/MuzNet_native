import styled from "styled-components/native";
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled(M.MainContainer)`
padding-bottom: 50px;
`;
const HeaderText = styled.Text`
font-size: 21px;
margin-top: 18px;
margin-bottom: 12px;
font-family: ${F.medium};
color: ${C.mainBlack};
`;
const UserMainData = styled.View`
display: flex;
align-items: center;
flex-direction: column;
`;
const UserMainDataCol = styled.View`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 0px;
`;
const UserAvatarBlock = styled.View`

`;
const UserAvatar = styled.View`
margin-top: 20px;
margin-bottom: 25px;
border-radius: 61px;
overflow: hidden;
border-color: ${C.borderGray};
border-width: 1.5px;
width: 122px;
height: 122px;
`;
const UserAvatarReplaceButton = styled.TouchableOpacity`
position: absolute;
bottom: 20px;
right: -10px;
width: 46px;
height: 46px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
border-radius:23px;
border-color: ${C.mainBlack};
border-width: 1px;
background-color: white;
`;
const UserMainDataName = styled.Text`
margin-bottom: 8px;
font-family: ${F.regular};
font-size: 20px;
`;
const UserMainDataPosition = styled(UserMainDataName)`
font-size: 16px;
font-family: ${F.light};
`;
const Form = styled.View`
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
border-width: 1.5px;
border-style: solid;
border-radius: 4px;
height:45px;
font-size: 16px;
`;

const ShowPasswordIconButton = styled.TouchableOpacity`
position: absolute;
top: -1px;
right:0px;
width : 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const ButtonSubmit = styled.TouchableOpacity`
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 36px;
background-color: ${C.mainBlue};
color: white;
font-size: 13.5px;
font-family: ${F.regular};
font-weight: 100;
margin-top: 20px;
width:100%;
`;
const ButtonSubmitDisabled = styled.Pressable`
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 36px;
color: white;
font-size: 13.5px;
font-family: ${F.regular};
font-weight: 100;
background-color: gray;
margin-top: 28px;
width:100%;
`;
const ButtonSubmitText = styled.Text`
color: white;
font-family: ${F.medium};
font-weight: 100;
font-size: 15px;
`;

const ErrorMessage = styled.Text`
color: red;
font-size: 13.5px;
position:absolute;
bottom:-18px ;
left:0px ;
`;

export const style = {
    Container: Container,
    HeaderText: HeaderText,
    UserMainData: UserMainData,
    UserMainDataCol: UserMainDataCol,
    UserAvatarBlock: UserAvatarBlock,
    UserAvatar: UserAvatar,
    UserAvatarReplaceButton: UserAvatarReplaceButton,
    UserMainDataName: UserMainDataName,
    UserMainDataPosition: UserMainDataPosition,
    Form: Form,
    FormInputContainer: FormInputContainer,
    FormInputBlock: FormInputBlock,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ShowPasswordIconButton: ShowPasswordIconButton,
    ErrorMessage: ErrorMessage,



    ButtonSubmit: ButtonSubmit,
    ButtonSubmitDisabled: ButtonSubmitDisabled,
    ButtonSubmitText: ButtonSubmitText,
    ErrorMessage: ErrorMessage,
}