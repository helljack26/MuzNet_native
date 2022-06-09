import React from "react";

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon
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

} = style;

const DropSelect = ({ selectedValue, toggling, isOpen, onSelect, dropHeader, dropOptions }) => {

    const mainHeader = selectedValue || dropHeader

    return (
        <DropBlock onPress={() => toggling(false)} >
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
            {isOpen && (
                <DropContainer
                    style={{
                        zIndex: 999,
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