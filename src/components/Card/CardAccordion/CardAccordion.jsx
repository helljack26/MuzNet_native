import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { prepareObjectKeyValueForListItem } from '@/components/helpers/prepareObjectKeyValueForListItem';

import AboutListItem from './AboutListItem/AboutListItem'

// Icon
import { AntDesign } from '@expo/vector-icons';
// Accordion
import Collapsible from 'react-native-collapsible';

import { styles } from './style'
const {
    About,
    Block_header,
    Block_header_Text,
    About_block,
    About_block_ul,
    Description,
    Description_text,
} = styles;

const CardAccordion = ({ objectDetails, adDescription, complexPath }) => {

    const convertedObjectDetails = prepareObjectKeyValueForListItem(objectDetails)

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [collapsed1, setCollapsed1] = useState(true);
    const [collapsed2, setCollapsed2] = useState(true);
    // Reset state if new page
    useEffect(() => {
        if (objectDetails) {
            setIsEnabled1(false)
            setIsEnabled2(false)
            setCollapsed1(true)
            setCollapsed2(true)
        }
    }, [objectDetails])

    // Open Accordion and change Arrow Icon
    const combine1 = function () {
        setCollapsed1(!collapsed1)
        setIsEnabled1((previousState) => !previousState)
    }
    const combine2 = function () {
        setCollapsed2(!collapsed2)
        setIsEnabled2((previousState) => !previousState)
    }
    return (
        <SafeAreaView >
            <About >
                {/* First */}
                <Block_header onPress={combine1}   >
                    <Block_header_Text >
                        Об объекте
                    </Block_header_Text>
                    <AntDesign
                        name={isEnabled1 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                <ScrollView>
                    {/*Content of Single Collapsible*/}
                    <Collapsible collapsed={collapsed1} align="center">
                        <About_block>
                            <About_block_ul>
                                {objectDetails !== undefined ?
                                    convertedObjectDetails.map((item, id) => {
                                        return <AboutListItem
                                            titleKey={item.titleKey}
                                            value={item.value}
                                            key={id}
                                            propertyComplexId={convertedObjectDetails.complexId}
                                            complexPath={complexPath}
                                        />
                                    }) : null
                                }
                            </About_block_ul>
                        </About_block>
                    </Collapsible>
                </ScrollView>

                {/* Description*/}
                <Block_header onPress={combine2}  >
                    <Block_header_Text >
                        Описание
                    </Block_header_Text>
                    <AntDesign
                        name={isEnabled2 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                {/*Collapsible Content*/}
                <ScrollView>
                    <Collapsible collapsed={collapsed2} align="center">
                        <Description>
                            <Description_text>{adDescription}</Description_text>
                        </Description>
                    </Collapsible>
                </ScrollView>
            </About >
        </SafeAreaView >
    );
};

export default CardAccordion;
