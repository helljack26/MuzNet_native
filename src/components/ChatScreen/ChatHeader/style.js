import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const Header = styled.View`
width: 100%;
height: 116px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0px 16px;
padding-bottom: 20px;
background-color: ${C.white};
z-index: 999;
position: absolute;
top: 0px;
left: 0px;
right: 0px;
`;
const HeaderWhiteBlock = styled.View`
width: 100%;
height: 44px;
background-color: ${C.white};
`;
const HeaderRow = styled.View`
width: 100%;
height: 32px;
background-color: ${C.white};
display: flex;
flex-direction: row;
`;
const HeaderClose = styled.View`
display: flex;
align-items: center;
flex-direction: row;
width: 24px;
height: 30px;
background-color: ${C.opacity20white};
border-radius: 6px;
margin-left: 5px;
`;
const HeaderUser = styled.View`
margin-left: 12px;
display: flex;
flex-direction: row;
align-items: center;
`;
const HeaderUserImgBlock = styled.View`
border-radius: 6px;
width: 32px;
height: 32px;
overflow: hidden;
border-color: ${C.opacity20white};
border-width: 1px;
`;
const HeaderUserImg = styled.Image`
width: 100%;
height: 100%;
`;
const HeaderUserName = styled(M.TitleBold20)`
margin-left: 12px;
`;
const HeaderOptions = styled.TouchableOpacity`
width: 24px;
height: 27px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
top: 4px;
right:5px;
`;
const HeaderOptionsDots = styled.View`
width: 4px;
height: 4px;
background-color: ${C.black};
border-radius: 2px;
margin-top: 3px;
`;
export const style = {
    Header: Header,
    HeaderRow: HeaderRow,
    HeaderWhiteBlock: HeaderWhiteBlock,
    HeaderClose: HeaderClose,
    HeaderUserName: HeaderUserName,
    HeaderUser: HeaderUser,
    HeaderUserImgBlock: HeaderUserImgBlock,
    HeaderUserImg: HeaderUserImg,
    HeaderOptions: HeaderOptions,
    HeaderOptionsDots: HeaderOptionsDots,
}