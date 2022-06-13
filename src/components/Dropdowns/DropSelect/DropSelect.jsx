import React from 'react';

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

    const mainHeader = selectedValue || dropHeader

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
                    <OptionText isHeader={true}>
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
                        }
                        )
                        }

                    </OptionsList>
                </DropContainer>
            )}
        </DropBlock>
    );
}

export default DropSelect;