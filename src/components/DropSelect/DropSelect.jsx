import React from "react";
import { getWindowDimension } from '@/components/helpers/getWindowDimension'

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    CheckRoundBlackIcon
} = IMAGES;
// Styles
import { style } from './style'

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

const DropSelect = ({ selectedValue, toggling, isOpen, onSelect, dropHeader, dropOptions }) => {
    const { windowHeight, windowWidth } = getWindowDimension()

    const mainHeader = selectedValue || dropHeader

    return (
        <DropBlock
            style={{
                width: windowWidth - 32,
                elevation: isOpen === true ? 15 : 0,
            }}
            onPress={() => toggling(false)} >
            <Drop>
                <DropHeader
                    style={{
                        borderBottomWidth: isOpen === true ? 0 : 1,
                        borderBottomLeftRadius: isOpen === true ? 0 : 6,
                        borderBottomRightRadius: isOpen === true ? 0 : 6,
                    }}
                    onPress={() => toggling(!isOpen)} >
                    <OptionText isHeader={true}>
                        {mainHeader}
                    </OptionText>

                    <ArrowBlock isOpen={isOpen}>
                        <GoBackIcon width={7} height={14} />
                    </ArrowBlock>
                </DropHeader>
            </Drop>
            {
                isOpen && (
                    <DropContainer
                        style={{
                            borderTopLeftRadius: isOpen === true ? 0 : 6,
                            borderTopRightRadius: isOpen === true ? 0 : 6,
                        }}>
                        <OptionsList>

                            {dropOptions.map((option, id) => {
                                const isActive = option === selectedValue

                                return <Option onPress={onSelect(option)} key={id}>
                                    <OptionText isActive={isActive}>
                                        {option}
                                    </OptionText>

                                    {isActive === true && <OptionActiveIcon >
                                        <CheckRoundBlackIcon width={20} height={20} />

                                    </OptionActiveIcon>
                                    }
                                </Option>
                            }
                            )
                            }

                        </OptionsList>
                    </DropContainer>
                )
            }
        </DropBlock >

    );
}

export default DropSelect;