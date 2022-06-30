import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.View`

`;

const Content = styled.View`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 16px;
padding-top: 88px;
padding-bottom: 20px;

`;
const Header = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
width: 100%;
margin-bottom: 16px;
`;
const Welcome = styled(M.Title28)`
color: #333333;
`;
const HeaderImageBlock = styled.View`
width: 48px;
height: 48px;
border-radius: 6px;
overflow: hidden;
border-color: ${C.opacity20white};
border-width: 1px;
border-style: solid;
`;
const HeaderImage = styled.Image`
width: 100%;
height: 100%;
`;

// Link list
const AccountLinkList = styled.View`

width: 100%;
`;
const AccountLink = styled.TouchableOpacity`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 17px 0px;
border-bottom-color: ${C.lightGray};
border-bottom-width: 1px;
`;
const AccountLinkText = styled(M.PlainText17)`
margin-left: 4px;
`;
const AccountLinkIcon = styled.View`
transform: rotate(180deg);
width: 24px;
height: 24px;
margin-right: 5px;
`;
const InviteFriendsButton = styled(M.BorderBtn)`
margin-top: 26px;
`;
const InviteFriendsButtonText = styled(M.BorderBtnText)`

`;
const LogOutButton = styled.TouchableOpacity`
position: absolute;
left: 16px;
bottom: 15px;
`;
const LogOutButtonText = styled(M.PlainText17)`
color: ${C.cyanGray};

`;

export const style = {
    Container: Container,
    Content: Content,
    Header: Header,
    Welcome: Welcome,
    HeaderImageBlock: HeaderImageBlock,
    HeaderImage: HeaderImage,

    // Link list
    AccountLinkList: AccountLinkList,
    AccountLink: AccountLink,
    AccountLinkText: AccountLinkText,
    AccountLinkIcon: AccountLinkIcon,

    InviteFriendsButton: InviteFriendsButton,
    InviteFriendsButtonText: InviteFriendsButtonText,

    LogOutButton: LogOutButton,
    LogOutButtonText: LogOutButtonText,
}

