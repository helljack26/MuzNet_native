import React from "react";
import { useState } from 'react';
import ObjectDataItem from './ObjectDataItem/ObjectDataItem';
import { useNavigation } from '@react-navigation/native';

// Styles
import { style } from './style'
// Styles
const {
    Container,
    ContainerBlock,
    SwitchBlock,
    SwitchButton,
    SwitchBlockButtonTextMobile,
    ContainerButtonsBlock,
    LinkToAddNewObject,
    LinkToAddNewObjectText,
} = style;

const ObjectData = ({ userObject, percentButton }) => {
    const navigation = useNavigation();

    const {
        userActiveObject,
        userArchiveObject
    } = userObject;

    const [isActiveObject, setIsActiveObject] = useState(true);

    // Length for switch buttons
    const userActiveObjectLength = userActiveObject !== undefined && userActiveObject.length
    const userArchiveObjectLength = userArchiveObject !== undefined && userArchiveObject.length

    const currentObjectData = isActiveObject ? userActiveObject : userArchiveObject;
    return (
        <Container>
            {/* To page Add new item  */}
            <LinkToAddNewObject onPress={() => navigation.navigate('Создать Realtor')}>
                <LinkToAddNewObjectText>
                    Создать объявление
                </LinkToAddNewObjectText>
            </LinkToAddNewObject>

            {/* Switch buttons */}
            <ContainerButtonsBlock>
                <SwitchBlock>
                    <SwitchButton
                        isActiveButton={isActiveObject}
                        onPress={() => setIsActiveObject(true)}
                    >
                        <SwitchBlockButtonTextMobile
                            isActiveButton={isActiveObject}>
                            Активных ({userActiveObjectLength})
                        </SwitchBlockButtonTextMobile>
                    </SwitchButton>

                    <SwitchButton
                        isActiveButton={!isActiveObject}
                        onPress={() => setIsActiveObject(false)}
                    >
                        <SwitchBlockButtonTextMobile
                            isActiveButton={!isActiveObject}>
                            Архивных ({userArchiveObjectLength})
                        </SwitchBlockButtonTextMobile>
                    </SwitchButton>
                </SwitchBlock>


            </ContainerButtonsBlock>

            <ContainerBlock>
                {currentObjectData.map((item, id) => {
                    return (
                        <ObjectDataItem
                            data={item}
                            key={id}
                            isActiveObject={isActiveObject}
                            percentButton={percentButton}
                        />)
                })}
            </ContainerBlock>
        </Container>
    )
}
export default ObjectData;