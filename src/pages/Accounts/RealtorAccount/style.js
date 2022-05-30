import styled from "styled-components/native";
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Header = styled.View`
display: flex;
flex-direction: column;
background-color: ${C.backgroundGray};
width: 100%;
padding: 0px 4%;
padding-top: 33px;

`;
const HeaderText = styled(M.HeaderH1)`
margin-bottom: 18px;
font-size: 21px;
`;

const HeaderNavbar = styled.View`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
align-items: flex-start;
`;
const HeaderNavbarLink = styled.TouchableOpacity`
display: flex;
flex-direction: row;
padding-bottom: 15px;
margin-top: 15px;
margin-right: 5.8%;
/* Style for active link */
border-bottom-color: ${props => props.isActive ? C.mainBlack : C.backgroundGray};
border-bottom-width: 4px;
width: 40%;
`;
const HeaderNavbarLinkText = styled.Text`
color: ${C.mainBlack};
font-family: ${props => props.isActive ? F.medium : F.light};
font-size: ${props => props.isActive ? 13.2 + 'px' : 14 + 'px'};
`;
const HeaderBlock = styled.View`
width: 100%;
display: flex;
flex-direction: column;
`;
const HeaderExitBlock = styled.View`
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: row;
padding-bottom: 18px;
position: absolute;
top: 36px;
right: 4%;
`;

const HeaderExitButtonText = styled.Text`
color: ${C.mainBlue};
font-family: ${F.regular};
font-size: 14px;
margin-left: 5px;
`;
const HeaderExitButton = styled.TouchableOpacity`
display: flex;
align-items: center;
flex-direction: row;
`;

const MainContainer = styled(M.MainContainer)`
background-color: white;
padding: 0px 0%;
`;
const Container = styled(M.MainContainer)`
padding-bottom: 25px;
background-color: white;
padding-top: 20px;
padding: 0px 4%;
`;
const ContainerBlock = styled.View`
display: flex;
flex-direction: row; 
`;

export const style = {
    MainContainer: MainContainer,
    Container: Container,
    ContainerBlock: ContainerBlock,
    HeaderText: HeaderText,
    Header: Header,
    HeaderNavbar: HeaderNavbar,
    HeaderNavbarLink: HeaderNavbarLink,
    HeaderNavbarLinkText: HeaderNavbarLinkText,
    HeaderBlock: HeaderBlock,
    HeaderExitBlock: HeaderExitBlock,
    HeaderExitButton: HeaderExitButton,
    HeaderExitButtonText: HeaderExitButtonText,
}