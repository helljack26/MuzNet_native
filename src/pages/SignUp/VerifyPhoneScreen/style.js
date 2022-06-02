
import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'


const Container = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding: 0px 20px;
padding-top: 40px;
`;
const Header = styled.View`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-bottom: 31px;
`;
const NumberInputsBlock = styled.View`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

const ContentTitle = styled(M.Title28)`

`;
const FormText = styled(M.MediumText17)`
color: ${C.cyanGray};
margin-bottom: 32px;
`;
const FormBlock = styled.View`
width: 100%;

`;
const FormInputBlock = styled(M.FormInputBlock)`

`;
const FormInputContainer = styled.View`

`;
const FormInputLabel = styled(M.FormInputLabel)`

`;
const FormInput = styled(M.FormInput)`
    height: 72px;
    margin: 0px 4px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0px;
    font-size: 32px;
    line-height: 40px;
    font-family: ${F.medium};
    text-align: center;
`;
const ContentBlock = styled.View`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 24px;
`;
const ContainerText = styled(M.PlainText17)`
color: ${C.sBlack};
display: flex;
align-items: center;
flex-direction: row;
padding-right: 5px;
`;
const ContainerLink = styled.TouchableOpacity`

`;
const ContainerLinkText = styled(M.BorderBtnText)`
    font-family: ${F.bold};

`;

export const style = {
    Container: Container,
    ContentTitle: ContentTitle,
    Header: Header,
    FormText: FormText,
    FormInputBlock: FormInputBlock,

    FormBlock: FormBlock,
    NumberInputsBlock: NumberInputsBlock,
    FormInputBlock: FormInputBlock,
    FormInputContainer: FormInputContainer,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ContentBlock: ContentBlock,
    ContainerText: ContainerText,
    ContainerLink: ContainerLink,
    ContainerLinkText: ContainerLinkText,

}