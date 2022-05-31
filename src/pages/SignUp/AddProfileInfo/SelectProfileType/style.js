
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
padding-top: 35px;
`;
const Content = styled.View`
height: 70%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
`;

const ContentTitle = styled(M.Title28)`
padding-bottom: 8px;
margin-bottom: 32px;
`;

const Button = styled(M.BorderBtn)`
margin-bottom: 8px;
`;
const ButtonText = styled(M.TextBtnText)`
color: ${props => props.isSkip === true ? C.gray : C.black};
padding-right: ${props => props.isSkip === true ? 0 + 'px' : 8 + 'px'};
padding-left: 8px;
`;
const ContentBlock = styled.View`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 16px;
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
    Content: Content,
    ContentTitle: ContentTitle,
    Button: Button,
    ButtonText: ButtonText,
    ContentBlock: ContentBlock,
    ContainerText: ContainerText,
    ContainerLink: ContainerLink,
    ContainerLinkText: ContainerLinkText,
}