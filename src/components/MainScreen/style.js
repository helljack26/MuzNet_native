import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Content = styled.View`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 88px;
padding-bottom: 20px;

`;
const Header = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
width: 100%;

`;
const Welcome = styled.View`
`;
const WelcomeImage = styled.Image`
`;
const PromoteBtn = styled(M.BlackBtn)`
width: 125px;
height: 32px;
border-radius: 6px;
`;
const PromoteBtnText = styled(M.BlackBtnText)`
font-size: 13px;
font-family: ${F.bold};
`;
// Search input
const SearchInputBlock = styled.View`
width: 100%;
margin-top: 26px;
margin-bottom: 16px;
`;
const SearchIconBlock = styled.View`
position: absolute;
top: 13px;
left: 10px;
width: 14px;
height: 14px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
z-index: 999;
`;
const SearchRemoveIconBlock = styled.TouchableOpacity`
position: absolute;
top: 6px;
bottom: 0px;
right: 6px;
width: 28px;
height: 28px;
border-radius: 6px;
background-color: ${C.black};
z-index: 999;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

`;
const SearchInput = styled.TextInput`
width: 100%;
height: 40px;
background-color: ${C.backGray};
border-radius: 6px;
padding-left: 32px;
padding-right: 42px;
font-size: 15px;
font-family: ${F.medium};
color: ${C.black};
`;

// Map container
const MapContainer = styled.View`
width: 100%;
height: 223px;
border: 1px solid ${C.gray};
border-radius: 6px;
overflow: hidden;
`;
const MapImage = styled.Image`
width: 100%;
height: 100%;

`;
const MapContainerBlockBg = styled.View`
width: 60%;
height:100%;
position: absolute;
top: 0px;
left: -4.5px;
`;
const MapContainerBlock = styled.View`
height:100%;
display: flex;
justify-content: center;
flex-direction: column;
position: absolute;
top: 0px;
bottom: 0px;
left: 15px;
`;
const MapTitle = styled(M.Title28)`

`;
const MapLink = styled(M.BlackBtn)`
width: 122px;
height: 38px;
margin-top: 18px;
border-radius: 8px;
`;
const MapLinkText = styled.Text`
font-size: 14.5px;
font-family: ${F.bold};
color: ${C.white};
line-height: 18px;
`;
const AdsContainer = styled.View`
width: 100%;

`;
const AdsContainerHeader = styled.View`
display: flex;
width: 100%;
margin-top: 35px;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;
const AdsContainerHeaderTitle = styled(M.TitleBold20)`

`;
const AdsContainerHeaderLink = styled.TouchableOpacity`

`;
const AdsContainerHeaderLinkText = styled(M.PlainText17)`

`;

export const style = {
    Content: Content,
    Header: Header,
    Welcome: Welcome,
    WelcomeImage: WelcomeImage,
    PromoteBtn: PromoteBtn,
    PromoteBtnText: PromoteBtnText,
    // Search input
    SearchInputBlock: SearchInputBlock,
    SearchInput: SearchInput,
    SearchIconBlock: SearchIconBlock,
    SearchRemoveIconBlock: SearchRemoveIconBlock,
    // Map
    MapContainer: MapContainer,
    MapContainerBlockBg: MapContainerBlockBg,
    MapImage: MapImage,
    MapContainerBlock: MapContainerBlock,
    MapTitle: MapTitle,
    MapLink: MapLink,
    MapLinkText: MapLinkText,
    // Ads
    AdsContainer: AdsContainer,
    AdsContainerHeader: AdsContainerHeader,
    AdsContainerHeaderTitle: AdsContainerHeaderTitle,
    AdsContainerHeaderLink: AdsContainerHeaderLink,
    AdsContainerHeaderLinkText: AdsContainerHeaderLinkText,
}

