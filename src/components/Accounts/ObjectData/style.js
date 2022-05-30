import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.ScrollView`

margin: 20px 0px;
width: 100%;

`;
const ContainerBlock = styled.View`
width: 100%;
display: flex;
flex-direction: column;
/* margin-top: 20px; */
`;
const ContainerButtonsBlock = styled.View`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

`;
const SwitchBlock = styled.View`
margin-top: 20px;
margin-bottom: 20px;
border-radius: 4px;
overflow: hidden;
border: 1px solid ${C.mainBlack};
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`;

const SwitchButton = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
background-color: ${props => props.isActiveButton ? C.mainBlue : 'white'};
width: 50%;
padding: 15px 0px;
`;

const SwitchBlockButtonTextMobile = styled.Text`
font-family: ${F.light};
color: ${props => props.isActiveButton ? 'white' : C.mainBlack};
font-size: 13px; 
`;
const LinkToAddNewObject = styled.TouchableOpacity`
padding: 15px 0px;
background-color: ${C.mainBlue};
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
`;
const LinkToAddNewObjectText = styled.Text`
color: white;
font-weight: 100;
font-family: ${F.medium};
font-size: 16px;
`;

export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    SwitchBlock: SwitchBlock,
    SwitchButton: SwitchButton,
    SwitchBlockButtonTextMobile: SwitchBlockButtonTextMobile,
    ContainerButtonsBlock: ContainerButtonsBlock,
    LinkToAddNewObject: LinkToAddNewObject,
    LinkToAddNewObjectText: LinkToAddNewObjectText,
}