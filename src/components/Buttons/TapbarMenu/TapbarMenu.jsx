import React from "react";

import { useRoute } from '@react-navigation/native';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Icons
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
        screenName: 'WelcomeScreen',
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

// Style
import styled from 'styled-components/native';
import C from '@/res/colors'

const TapbarBlock = styled.View`
border-top-color: ${C.lightGray};
border-top-width: 1px;
display: flex;
justify-content: space-between;
flex-direction: row;
position: absolute;
left: 0px;
bottom: 0px;
width: 100%;
height : 82px;
/* height : ${props => props.isKeyboardOpen === true ? 60 + 'px' : 82 + 'px'}; */
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
opacity: ${props => props.isActive === true ? 1 : 0.2};
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

const TapbarMenu = ({ isShowKeyboard }) => {
    const route = useRoute();

    const isKeyboardOpen = isKeyboardShown()

    return (
        <TapbarBlock
            isKeyboardOpen={isShowKeyboard !== undefined ? isShowKeyboard : isKeyboardOpen}
        >
            {TapbarMenuContent.map((item, id) => {
                const isContractor = route.name.slice(0, 10) === 'Contractor' ? 10 : 8

                const cleanRoute = route.name.slice(isContractor, route.name.length)

                const isSearch = cleanRoute === 'ListSearchScreen' ? 'WelcomeScreen' : cleanRoute

                const isActive = isSearch === item.screenName
                return <TapbarItem
                    isActive={isActive}
                    key={id}>
                    {/* Icon */}
                    {item.icon}

                    {isActive === true && <ActiveDot></ActiveDot>}
                </TapbarItem>

            })}
        </TapbarBlock>
    )
}
export default TapbarMenu; 