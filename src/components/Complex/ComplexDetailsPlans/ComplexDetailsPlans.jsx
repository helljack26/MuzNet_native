import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icon
import { AntDesign } from '@expo/vector-icons';
// Accordion
import Collapsible from 'react-native-collapsible';

import { styles } from './style'
const {
    Plans,
    Block_header,
    Block_header_Text,
    About_block,
    About_block_ul,
    PartsBlock,
    BlockItem,
    BlockItemCol,
    BlockItemInfo,
    BlockItemName,
    BlockItemDescription,
    BlockItemLink,
    BlockItemLinkText,
    DoneLabel,
    LabelText,
    ExpiryDateLabel,
} = styles;

const ComplexDetailsPlans = ({ details, isRealtor }) => {
    const {
        plans,
    } = details;

    const navigation = useNavigation();
    // Item component
    const PartsBlockItem = ({ data }) => {
        const { planName, planDescription, isDone, planId } = data;

        const isRealtorScreen = isRealtor === true ? 'ScreenRealtor' : 'ScreenUser'
        const isRealtorPlanLink = isRealtor === true ? 'ApartmentsComplexPlanPageRealtor' : 'ApartmentsComplexPlanPageUser'
        if (data === undefined) {
            return
        } else {
            return (
                <BlockItem>

                    <BlockItemCol>
                        <BlockItemInfo>
                            <BlockItemName>
                                {planName} &nbsp;
                            </BlockItemName>
                            <BlockItemDescription style={{ flexShrink: 2 }}>
                                {planDescription}
                            </BlockItemDescription>
                        </BlockItemInfo>
                        <BlockItemLink
                            onPress={() => {
                                navigation.navigate(isRealtorScreen, {
                                    screen: isRealtorPlanLink,
                                    params: {
                                        complexId: details.complexId,
                                        planId: planId,
                                    }
                                });
                            }}
                        >
                            <BlockItemLinkText>
                                Смотреть шахматку
                            </BlockItemLinkText>
                        </BlockItemLink>
                    </BlockItemCol>

                    <BlockItemCol>
                        {isDone !== undefined ? (
                            isDone === true ?
                                <DoneLabel>
                                    <LabelText>
                                        Сдан
                                    </LabelText>
                                </DoneLabel>
                                :
                                <ExpiryDateLabel>
                                    <LabelText>
                                        {isDone}
                                    </LabelText>
                                </ExpiryDateLabel>)
                            : null}
                    </BlockItemCol>
                </BlockItem>
            )
        }
    }

    // Open Accordion and change Arrow Icon
    const [collapsed, setCollapsed] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const combine = function () {
        setCollapsed(!collapsed)
        setIsEnabled((previousState) => !previousState)
    }
    return (
        <>
            <Plans>
                <Block_header onPress={combine}>
                    <Block_header_Text >
                        Шахматки
                    </Block_header_Text>
                    <AntDesign
                        name={isEnabled ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                <ScrollView>
                    {/*Content of Single Collapsible*/}
                    <Collapsible collapsed={collapsed} align="center">
                        <About_block>
                            <About_block_ul>
                                <PartsBlock>
                                    {plans.map((item, id) => <PartsBlockItem data={item} key={id} />)}
                                </PartsBlock>
                            </About_block_ul>
                        </About_block>
                    </Collapsible>
                </ScrollView>
            </Plans>
        </>
    );
};

export default ComplexDetailsPlans;