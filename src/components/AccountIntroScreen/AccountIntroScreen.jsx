import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import InviteFriendsPopup from './InviteFriendsPopup'

// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Store
import { observer } from 'mobx-react-lite';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {

    GoBackIcon
} = IMAGES;
// Styles
import { style } from './style'
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

const AccountIntroScreen = observer(({ stackName, isContractor }) => {
    const navigation = useNavigation();

    const userImage = require('../../../assets/Mock/Georgia.png')
    const userName = 'Annie'

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    // Invite friends popup state
    const [isOpenInviteFriendsBlock, setOpenInviteFriendsBlock] = useState(false);

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
                    <AccountLink>
                        <AccountLinkText>
                            Personal Information
                        </AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                    <AccountLink>
                        <AccountLinkText>
                            Payments and Payouts
                        </AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                    <AccountLink>
                        <AccountLinkText>
                            Change Password
                        </AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                    <AccountLink>
                        <AccountLinkText>
                            Notification
                        </AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                    {isContractor === true && <AccountLink>
                        <AccountLinkText>
                            My Ads
                        </AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>}

                    <AccountLink
                        style={{
                            borderBottomWidth: 0,
                        }}
                    >
                        <AccountLinkText>
                            Terms of Service
                        </AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                </AccountLinkList>

                {/* Invite friends popup */}
                <InviteFriendsButton
                    onPress={() => {
                        setOpenInviteFriendsBlock(true)
                    }}
                >
                    <InviteFriendsButtonText>
                        Invite Friends
                    </InviteFriendsButtonText>
                </InviteFriendsButton>

                {/* Log out */}
                <LogOutButton>
                    <LogOutButtonText>
                        Log Out
                    </LogOutButtonText>
                </LogOutButton>
            </Content>

            {/* Confirm popup */}
            <InviteFriendsPopup
                isOpenBottomPopup={isOpenInviteFriendsBlock}
                setOpenBottomPopup={setOpenInviteFriendsBlock}
            />

        </Container>

    )
})

export default AccountIntroScreen;