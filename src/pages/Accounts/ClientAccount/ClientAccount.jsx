import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { accountClientData } from '@/stores/accountClientData.js'

import PersonalData from './PersonalData/PersonalData';
import ObjectData from '@/components/Accounts/ObjectData/ObjectData';

// Images
import IMAGES from '@/res/images'
const {
    ExitIcon,
} = IMAGES;
// Styles
import { style } from '../RealtorAccount/style'

const {
    MainContainer,
    Container,
    ContainerBlock,
    HeaderText,
    Header,
    HeaderNavbar,
    HeaderNavbarLink,
    HeaderNavbarLinkText,
    HeaderBlock,
    HeaderExitBlock,
    HeaderExitButton,
    HeaderExitButtonText,
} = style;

const ACCOUNTHASHLINK = [
    { title: 'Личные данные', hash: '' },
    { title: 'Мои объекты', hash: 'ActiveTab', subHash: 'ArchiveTab' },
    // {     title: 'Сообщения',     hash: '/#message' },
]

const ClientAccount = () => {
    const navigation = useNavigation();

    const request = accountClientData(1)

    const {
        userPersonalData,
        userObject,
        // userMessage,
    } = request;

    const [tab, setTab] = useState('');

    return (
        <>
            <MainContainer>
                <Header>
                    <HeaderBlock>

                        <HeaderText>
                            Личный кабинет
                        </HeaderText>

                        <HeaderNavbar>
                            {ACCOUNTHASHLINK.map((item, id) => {
                                const { title, hash } = item;
                                const isActive = tab === hash
                                return (
                                    <HeaderNavbarLink
                                        isActive={isActive}
                                        onPress={() => setTab(hash)}
                                        key={id}
                                    >
                                        <HeaderNavbarLinkText isActive={isActive}  >
                                            {title}
                                        </HeaderNavbarLinkText>
                                    </HeaderNavbarLink>
                                )
                            })}

                        </HeaderNavbar>
                    </HeaderBlock>

                    <HeaderExitBlock>
                        <HeaderExitButton>
                            <ExitIcon width={16} />
                            <HeaderExitButtonText>
                                Выйти
                            </HeaderExitButtonText>
                        </HeaderExitButton>
                    </HeaderExitBlock>

                </Header>

                <Container>
                    <ContainerBlock>

                        {tab === ACCOUNTHASHLINK[0].hash && <PersonalData userPersonalData={userPersonalData} />}

                        {tab === ACCOUNTHASHLINK[1].hash && <ObjectData userObject={userObject} />}

                    </ContainerBlock>

                </Container>
                <HeaderNavbarLinkText
                    onPress={() => navigation.navigate('RealtorAccountPage')} >
                    <HeaderNavbarLinkText>
                        Аккаунт Риелтора
                    </HeaderNavbarLinkText>
                </HeaderNavbarLinkText>
            </MainContainer>
        </>
    )
}


export default ClientAccount;