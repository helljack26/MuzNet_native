import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native';

import IMAGES from '@/res/images'

const {
    HomeTapbarIcon,
    MessagesTapbarIcon,
    CalendarTapbarIcon,
    CommunityTapbarIcon,
    ProfileTapbarIcon
} = IMAGES;
// Content
const TapbarMenuContent = [
    {
        screenName: 'ContractorWelcomeScreen',
        icon: <HomeTapbarIcon width={20} height={20} />
    },
    {
        screenName: 'MessagesScreen',
        icon: <MessagesTapbarIcon width={20} height={20} />
    },
    {
        screenName: 'CalendarScreen',
        icon: <CalendarTapbarIcon width={20} height={20} />
    },
    {
        screenName: 'CommunityScreen',
        icon: <CommunityTapbarIcon height={20} />
    },
    {
        screenName: 'ProfileScreen',
        icon: <ProfileTapbarIcon width={20} height={20} />
    }
]

import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const TapbarBlock = styled.View`
display: flex;
justify-content: space-between;
flex-direction: row;
position: absolute;
left: 0px;
bottom: 0px;
width: 100%;
height: 82px;
z-index:999;
background-color: ${C.white};
padding: 0px 10px;

`;
const TapbarItem = styled.TouchableOpacity`
padding-top: 16px;
display: flex;
align-items: center;
flex-direction: column;
width: 20%;
opacity: ${props => props.isActive === true ? 1 : 0.5};
`;
const ActiveDot = styled.View`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 6px;
width: 4px;
height: 4px;
border-radius: 2px;
background-color: ${C.black};
`;

const TapbarMenu = () => {
    // const navigation = useNavigation();
    const route = useRoute();

    return (
        <TapbarBlock>
            {TapbarMenuContent.map((item, id) => {
                const isActive = item.screenName === route.name

                return <TapbarItem
                    isActive={isActive}
                    key={id}>
                    {item.icon}

                    {isActive === true && <ActiveDot></ActiveDot>}
                </TapbarItem>

            })}
        </TapbarBlock>
    )
}
export default TapbarMenu; 