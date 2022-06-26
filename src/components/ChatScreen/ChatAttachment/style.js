import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const AttachContainer = styled.View`
width: 100%;
height: 45%;
background-color: ${C.white};
border-top-left-radius: 16px;
border-top-right-radius: 16px;
overflow: hidden;
position: absolute;
left: 0px;
bottom: 0px;
right: 0px;
`;

const Header = styled.View`
width: 100%;
display: flex;
flex-direction: row;
padding: 16px;
border-bottom-color: ${props => props.isCameraRoll === true ? 'transparent' : C.lightGray};
border-bottom-width: 1px;
`;
const ButtonsBlock = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
width: 100%;
height: 40px;
padding: 4px;
border-radius: 6px;
border-color: ${C.lightGray};
border-width: 1px;
border-style: solid;
`;
const Button = styled.TouchableOpacity`
width: 48.5%;
height: 100%;
background-color: ${props => props.isActive === true ? C.black : C.white};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 6px;
`;
const ButtonText = styled(M.MediumText14)`
font-family: ${F.bold};
color: ${props => props.isActive === true ? C.white : C.black};
padding-left: 8px;
`;
const AttachCameraRollBlock = styled.ScrollView`
width: 100%;
height: 100%;
`;
const AttachFileBlock = styled.ScrollView`
width: 100%;
height: 100%;
`;
const AttachCameraOpenBtn = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${C.backGray};
`;
const AttachCameraOpenBtnText = styled(M.MediumText12)`
margin-top: 4px;
`;
export const style = {
    AttachContainer: AttachContainer,
    Header: Header,
    ButtonsBlock: ButtonsBlock,
    Button: Button,
    ButtonText: ButtonText,
    AttachCameraRollBlock: AttachCameraRollBlock,
    AttachFileBlock: AttachFileBlock,
    AttachCameraOpenBtn: AttachCameraOpenBtn,
    AttachCameraOpenBtnText: AttachCameraOpenBtnText,
}
