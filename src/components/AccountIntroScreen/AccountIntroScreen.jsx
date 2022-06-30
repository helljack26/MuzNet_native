import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import PersonalContractorInformation from './PersonalContractorInformation';
import PersonalMusicianInformation from './PersonalMusicianInformation';

import InviteFriendsPopup from './InviteFriendsPopup'

// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'


// Images
import IMAGES from '@/res/images'
const {

    GoBackIcon
} = IMAGES;
// Styles
import { style } from './style'
import C from '@/res/colors'
import { S } from '@/res/strings'
const {
    Container,
    Content,
    Header,
    Welcome,
    HeaderImageBlock,
    HeaderImage,
    // Link list
    AccountLinkList,
    AccountLink,
    AccountLinkText,
    AccountLinkIcon,
    InviteFriendsButton,
    InviteFriendsButtonText,

    LogOutButton,
    LogOutButtonText,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useAccountApiStore } from '@/stores/AccountApi';

const AccountIntroScreen = observer(({ stackName, isContractor }) => {
    console.log("🚀 ~ file: AccountIntroScreen.jsx ~ line 50 ~ AccountIntroScreen ~ isContractor", isContractor)
    const navigation = useNavigation();
    const { setOpenTabs } = useAccountApiStore();

    const userImage = require('../../../assets/Mock/Georgia.png')
    const userName = 'Annie'

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    // Invite friends popup state
    const [isOpenInviteFriendsBlock, setOpenInviteFriendsBlock] = useState(false);

    const tabsLink = isContractor === true ? S.AccountTabs.contractorTabs : S.AccountTabs.musicianTabs

    return (
        <Container
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <Content
                style={{
                    width: windowWidth,
                    height: windowHeight - 115,
                }}
            >
                {/* Header */}
                <Header>
                    <Welcome>
                        Hello, {userName}
                    </Welcome>

                    <HeaderImageBlock>
                        <HeaderImage source={userImage} resizeMode={'cover'} />
                    </HeaderImageBlock>
                </Header>

                {/* Link list */}
                <AccountLinkList>
                    {tabsLink.map((tabName, id) => {
                        if (tabName === 'My Ads' && !isContractor) return null
                        return <AccountLink
                            onPress={() => {
                                setOpenTabs({
                                    tabName: tabName,
                                    isOpen: true
                                })
                            }}
                            key={id}>
                            <AccountLinkText>{tabName}</AccountLinkText>

                            <AccountLinkIcon>
                                <GoBackIcon width={9} height={16} />
                            </AccountLinkIcon>
                        </AccountLink>
                    })}

                </AccountLinkList>

                {/* Invite friends popup */}
                <InviteFriendsButton onPress={() => { setOpenInviteFriendsBlock(true) }}  >
                    <InviteFriendsButtonText>Invite Friends</InviteFriendsButtonText>
                </InviteFriendsButton>

                {/* Log out */}
                <LogOutButton>
                    <LogOutButtonText>
                        Log Out
                    </LogOutButtonText>
                </LogOutButton>
            </Content>

            {/* Invite friends popup */}
            <InviteFriendsPopup
                isOpenBottomPopup={isOpenInviteFriendsBlock}
                setOpenBottomPopup={setOpenInviteFriendsBlock}
            />

            {/* Accounts tabs */}
            {isContractor === true ?
                <PersonalContractorInformation />
                :
                <PersonalMusicianInformation />
            }
        </Container>
    )
})

export default AccountIntroScreen;