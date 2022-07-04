import React from 'react';
import { useState, useEffect } from 'react';

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    CheckRoundBlackIcon
} = IMAGES;
// Styles
import { style } from './style'
import C from '@/res/colors'

const {
    DropBlock,
    Drop,
    DropHeader,
    ArrowBlock,
    DropContainer,
    OptionsList,
    Option,
    OptionText,
    OptionActiveIcon
} = style;

const DropSelect = ({ isResetAll, selectedValue, toggling, isOpen, onSelect, dropHeader, dropOptions }) => {

    const [mainHeader, setMainHeader] = useState()

    useEffect(() => {
        setMainHeader(selectedValue || dropHeader)
    }, [selectedValue, dropHeader]);

    // If resetAll
    useEffect(() => {
        if (isResetAll === true) {
            setMainHeader(dropHeader)
        }
    }, [isResetAll]);
    return (
        <DropBlock
            onPress={() => toggling(false)} >
            <Drop>
                <DropHeader
                    style={{
                        borderBottomWidth: isOpen === true ? 0 : 1,
                        borderBottomLeftRadius: isOpen === true ? 0 : 6,
                        borderBottomRightRadius: isOpen === true ? 0 : 6,
                        elevation: isOpen === true ? 5 : 0,
                    }}
                    onPress={() => toggling(!isOpen)} >
                    <OptionText
                        style={{
                            color: dropHeader === selectedValue ? C.sBlack : C.black,
                        }}
                        isHeader={true}>
                        {mainHeader}
                    </OptionText>
                    <ArrowBlock isOpen={isOpen}>
                        <GoBackIcon width={10} height={15} />
                    </ArrowBlock>
                </DropHeader>
            </Drop>
            {isOpen && (
                <DropContainer
                    nestedScrollEnabled={true}
                    style={{
                        zIndex: 999,
                        borderTopLeftRadius: isOpen === true ? 0 : 6,
                        borderTopRightRadius: isOpen === true ? 0 : 6,
                        elevation: 4,
                    }}
                >
                    <OptionsList>
                        {dropOptions.map((option, id) => {
                            const isActive = option === selectedValue
                            return <Option
                                isActive={isActive}
                                onPress={onSelect(option)} key={id}>
                                <OptionText>
                                    {option}
                                </OptionText>
                                {isActive === true && <OptionActiveIcon >
                                    <CheckRoundBlackIcon width={20} height={20} />
                                </OptionActiveIcon>
                                }
                            </Option>
                        })}
                    </OptionsList>
                </DropContainer>
            )}
        </DropBlock>
    );
}

export default DropSelect;