import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import PersonalContractorInfoTab from './PersonalContractorInfoTab';
import PersonalMusicianInfoTab from './PersonalMusicianInfoTab';
import ChangePasswordTab from './ChangePasswordTab';
import PaymentAndPayoutTab from './PaymentAndPayoutTab';
import NotificationTab from './NotificationTab';
import TermsOfServiceTab from './TermsOfServiceTab';
import MyAdsTab from './MyAdsTab';
import LeaveFeedbackNotification from '@/components/LeaveFeedbackNotification/LeaveFeedbackNotification';
import FaqTab from './FaqTab';

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
// Mixins
import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText,
} = M;
// Store
import { observer } from 'mobx-react-lite';
import { useAccountApiStore } from '@/stores/AccountApi';

const AccountIntroScreen = observer(({ stackName, isContractor }) => {

    const navigation = useNavigation();
    const {
        isOpenPersonalInfoTab,
        setOpenTabs,
        isOpenNotificationTab,
        isOpenPaymentTab,
        isOpenChangePasswordTab,
        isOpenMyAdsTab,
        isOpenTermOfServiceTab,
        isOpenFaqTab
    } = useAccountApiStore();

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
                        const isLast = id === tabsLink.length - 1
                        return <AccountLink style={{
                            borderBottomWidth: isLast ? 0 : 1
                        }}
                            onPress={() => {
                                setOpenTabs({
                                    tabName: tabName,
                                    isOpen: true
                                })
                            }}
                            key={id}
                        >
                            <AccountLinkText>{tabName}</AccountLinkText>

                            <AccountLinkIcon>
                                <GoBackIcon width={9} height={16} />
                            </AccountLinkIcon>
                        </AccountLink>
                    })}
                    {/* Notification */}
                    <LeaveFeedbackNotification />
                </AccountLinkList>

                {/* Promote my ads */}
                {!isContractor && <BlackBtn
                // TODO тут с навигейтить на проут май ад экран
                // onPress={() => { }} 
                >
                    <BlackBtnText>Promote My Ad</BlackBtnText>
                </BlackBtn>
                }
                {/* Invite friends popup */}
                <InviteFriendsButton
                    style={{
                        marginTop: isContractor === true ? 0 : 8,
                    }}
                    onPress={() => { setOpenInviteFriendsBlock(true) }}  >
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
            {isOpenInviteFriendsBlock && <InviteFriendsPopup
                isOpenBottomPopup={isOpenInviteFriendsBlock}
                setOpenBottomPopup={setOpenInviteFriendsBlock}
            />}

            {/* Personal info tab */}
            {isOpenPersonalInfoTab === true ? isContractor === true && <PersonalContractorInfoTab isOpenTab={isOpenPersonalInfoTab} /> : null}

            {isOpenPersonalInfoTab === true ? isContractor === false && <PersonalMusicianInfoTab isOpenTab={isOpenPersonalInfoTab} /> : null}

            {/* Change password tab */}
            {isOpenChangePasswordTab === true && <ChangePasswordTab isOpenTab={isOpenChangePasswordTab} />}

            {/* Payment and payouts tab */}
            {isOpenPaymentTab === true && <PaymentAndPayoutTab isContractor={isContractor} isOpenTab={isOpenPaymentTab} />}

            {/* Notification tab */}
            {isOpenNotificationTab === true && <NotificationTab isContractor={isContractor} isOpenTab={isOpenNotificationTab} />}

            {/* Terms of service tab */}
            {isOpenTermOfServiceTab === true && <TermsOfServiceTab isOpenTab={isOpenTermOfServiceTab} />}

            {/* My ads for contractor */}
            {(isContractor === true && isOpenMyAdsTab === true) && <MyAdsTab isOpenTab={isOpenMyAdsTab} />}

            {/* My ads for contractor */}
            {isOpenFaqTab === true && <FaqTab isOpenTab={isOpenFaqTab} />}

        </Container>
    )
})

export default AccountIntroScreen;