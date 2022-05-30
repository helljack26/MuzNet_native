import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Styles
import { style } from './style'
const {
    Container,
    ContainerBlock,
    ContainerHeader,
    ContainerBlockRow,
    ContainerBlockRowTitle,
    ContainerBlockRowValue,
    HeaderText,
    LinkToAddNewObject,
    LinkToAddNewObjectDisable,
    LinkToAddNewObjectText,
    DropApartmentTypeBlock,
    DropBlock,
    Drop,
    DropHeader,
    DropContainer,
    DropContainerList,
    DropContainerListLink,
    DropContainerListLinkText,
} = style;

const SubscriptionData = ({ userEmployees, userSubscription, tabTitle }) => {
    const { handleSubmit } = useForm();

    const {
        // subscriptionId,
        subscriptionDueDate,
        subscriptionEmployeesMax,
        subscriptionType,
        subscriptionTypes
    } = userSubscription;

    const currentNumberOfEmployees = userEmployees !== undefined ? userEmployees.length : null

    const getDaysLeftString = (dueDate) => {
        const currentDate = Date.now();
        const subscriptionDeadline = new Date(dueDate);
        const convertedDate = +subscriptionDeadline.getDate() + "." + (subscriptionDeadline.getMonth() + 1) + "." + subscriptionDeadline.getFullYear()
        const daysLeft = Math.floor((dueDate - currentDate) / 86400000)
        const isDay = dueDate > 86400000 ? `${daysLeft} дней` : 'Сегодня'

        return { convertedDate, isDay }
    }
    const { convertedDate
        // isDay
    } = getDaysLeftString(subscriptionDueDate)

    const [isOpen, setIsOpen] = useState(false);
    const [subscriptionTypeState, setSubscriptionTypeState] = useState(subscriptionType);
    const toggling = (state) => setIsOpen(state);
    const onSubscriptionTypeSelectClicked = value => () => { setSubscriptionTypeState(value); setIsOpen(false); };

    // Submit handler
    const onSubmit = (data) => {
        if (subscriptionTypeState !== subscriptionType) {
            data.newSubscription = subscriptionTypeState
            console.log('кайф', data)
        }
        return
    };
    const isShowSubmitButton = subscriptionType !== subscriptionTypeState
    return (
        <Container>
            <ContainerHeader>

                <HeaderText >
                    {tabTitle}
                </HeaderText>

            </ContainerHeader>

            <ContainerBlock>
                <ContainerBlockRow>
                    <ContainerBlockRowTitle>
                        Ваш тариф:
                    </ContainerBlockRowTitle>
                    <ContainerBlockRowValue>
                        {subscriptionType}
                    </ContainerBlockRowValue>
                </ContainerBlockRow>

                <ContainerBlockRow>
                    <ContainerBlockRowTitle>Тариф заканчивается:</ContainerBlockRowTitle>
                    <ContainerBlockRowValue>{convertedDate}</ContainerBlockRowValue>
                </ContainerBlockRow>

                <ContainerBlockRow>
                    <ContainerBlockRowTitle>Добавлено агентов:</ContainerBlockRowTitle>

                    <ContainerBlockRowValue>
                        {currentNumberOfEmployees} из {subscriptionEmployeesMax} возможных
                    </ContainerBlockRowValue>
                </ContainerBlockRow>

                <DropApartmentTypeBlock>
                    <ContainerBlockRowTitle>Тарифы</ContainerBlockRowTitle>

                    <DropBlock>
                        <Drop onPress={() => toggling(false)}  >
                            <DropHeader onPress={() => toggling(!isOpen)} >
                                <DropContainerListLinkText>
                                    {subscriptionTypeState || subscriptionType}
                                </DropContainerListLinkText>
                                <AntDesign
                                    name={isOpen ? 'up' : 'down'}
                                    size={15}
                                    color="black" />
                            </DropHeader>
                        </Drop>
                        {isOpen && (
                            <DropContainer style={{
                                zIndex: 2
                            }}>
                                <DropContainerList>
                                    {subscriptionTypes.map((option, id) => <DropContainerListLink
                                        onPress={onSubscriptionTypeSelectClicked(option)}
                                        key={id}>
                                        <DropContainerListLinkText>
                                            {option}
                                        </DropContainerListLinkText>
                                    </DropContainerListLink>
                                    )
                                    }

                                </DropContainerList>
                            </DropContainer>
                        )}
                    </DropBlock >

                </DropApartmentTypeBlock>

                {/* Continue */}
                {isShowSubmitButton ? <LinkToAddNewObject onPress={handleSubmit(onSubmit)}  >
                    <LinkToAddNewObjectText>Продолжить</LinkToAddNewObjectText>
                </LinkToAddNewObject>
                    :
                    <LinkToAddNewObjectDisable>
                        <LinkToAddNewObjectText>Продолжить</LinkToAddNewObjectText>
                    </LinkToAddNewObjectDisable>
                }

            </ContainerBlock>
        </Container >
    )
}
export default SubscriptionData;