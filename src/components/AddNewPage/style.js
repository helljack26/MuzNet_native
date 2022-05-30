import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.ScrollView`
width: 100%;
padding-left:4%;
padding-right:4%;
padding-top: 20px;
background-color: white;
`;
const Header = styled.View`
display: flex;
flex-direction: column;
width: 100%;
`;
const HeaderText = styled(M.HeaderH1)`
font-size: 22.5px;
margin-bottom: 20px;
font-size: 21px;
`;
const HeaderBlock = styled.View`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
`;
const HeaderNavbar = styled.View`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
border-radius: 4px;
border-color: ${C.mainBlack};
border-width: 1px;
overflow: hidden;
`;
const HeaderNavbarLink = styled.TouchableOpacity`
padding: 14px 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: ${props => props.isActive ? C.mainBlue : 'white'};
width: 100%;
padding: 14px 10px;
border-bottom-color : ${C.mainBlack};
`;
const HeaderNavbarLinkText = styled.Text`
font-size: 13px;
color: ${props => props.isActive ? 'white' : C.mainBlack};
font-family: ${F.light};
`;
const ContainerBlock = styled.View`

`;
const HeaderBlockRadio = styled.View`
display: flex;
flex-direction: row;
width: 100%;
justify-content:flex-end;
margin-top: 15px;
`;
const RadioRound = styled.View`
background-color: ${props => !props.isRentTab ? C.mainBlue : 'white'};
opacity: ${props => !props.isRentTab ? 1 : 0};
width: 16px;
height: 16px;
border-radius: 8px;
`;
const HeaderBlockRadioLabel = styled.TouchableOpacity`
margin-left: 23px;
display: flex;
align-items: center;
flex-direction: row;
`;
const RadioBorder = styled.View`
border-radius: 16px;
height: 32px;
width: 32px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-right: 8px;
border-color: ${C.borderGray};
border-width: 1px;
background-color: white;
`;
const RadioText = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 14px;
`;

export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    HeaderText: HeaderText,
    Header: Header,
    HeaderNavbar: HeaderNavbar,
    HeaderNavbarLink: HeaderNavbarLink,
    HeaderNavbarLinkText: HeaderNavbarLinkText,
    HeaderBlock: HeaderBlock,
    HeaderBlockRadio: HeaderBlockRadio,
    HeaderBlockRadioLabel: HeaderBlockRadioLabel,
    RadioBorder: RadioBorder,
    RadioRound: RadioRound,
    RadioText: RadioText,
}