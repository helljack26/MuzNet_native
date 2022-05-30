import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { accountRealtorData } from '@/stores/accountRealtorData.js'

import PercentButton from '@/components/Buttons/PercentButton/PercentButton';
import PersonalData from './PersonalData/PersonalData';
import ObjectData from '@/components/Accounts/ObjectData/ObjectData';
import EmployeesData from './EmployeesData/EmployeesData';
import SubscriptionData from './SubscriptionData/SubscriptionData';

// Images
import IMAGES from '@/res/images'
const {
    ExitIcon,
} = IMAGES;
// Styles
import { style } from './style'
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
    { title: 'Сотрудники', hash: 'Employees' },
    { title: 'Подписка', hash: 'Subscribtion' },
]

const RealtorAccount = () => {
    const navigation = useNavigation();
    const request = accountRealtorData(1)

    const {
        userPersonalData,
        userObject,
        // userMessage,
        userEmployees,
        userSubscription
    } = request;

    const [tab, setTab] = useState('');

    const percentButton = <PercentButton isBig={true} />
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

                        {tab === ACCOUNTHASHLINK[1].hash && <ObjectData userObject={userObject} percentButton={percentButton} />}

                        {tab === ACCOUNTHASHLINK[2].hash && <EmployeesData userEmployees={userEmployees} tabTitle={ACCOUNTHASHLINK[2].title} />}

                        {tab === ACCOUNTHASHLINK[3].hash && <SubscriptionData userEmployees={userEmployees} userSubscription={userSubscription} tabTitle={ACCOUNTHASHLINK[3].title} />}

                    </ContainerBlock>

                </Container>

                <HeaderNavbarLinkText
                    onPress={() => navigation.navigate('ClientAccountPage')} >
                    <HeaderNavbarLinkText>
                        Аккаунт клиента
                    </HeaderNavbarLinkText>
                </HeaderNavbarLinkText>

            </MainContainer>
        </>
    )
}


export default RealtorAccount;