import React from "react";

// Images
import IMAGES from '@/res/images'
import C from '@/res/colors'
const {
    GoBackIcon,
    UsaIcon
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
    BorderRight,
    Option,
    OptionText,

} = style;

const PositionOptions = [
    { uri: <UsaIcon width={24} height={16} /> },
    { uri: <UsaIcon width={24} height={16} /> },
    { uri: <UsaIcon width={24} height={16} /> },
    { uri: <UsaIcon width={24} height={16} /> }
]

const DropFlagSelect = ({ selectedValue, toggling, isOpen, onSelect, inputFocus1, isError }) => {

    const mainHeader = selectedValue || <UsaIcon width={24} height={16} />

    return (
        <DropBlock onPress={() => toggling(false)} >
            <Drop>
                <DropHeader
                    style={{
                        borderColor: isError ? C.red : inputFocus1,
                        borderWidth: isError ? 2 : 1,
                        // color: isError ? C.red : C.black,
                        // borderColor: inputFocus1,
                    }}

                    onPress={() => toggling(!isOpen)} >
                    <OptionText isHeader={true}>
                        {mainHeader}
                    </OptionText>

                    <ArrowBlock isOpen={isOpen}>
                        <GoBackIcon width={7} height={14} />
                    </ArrowBlock>
                    <BorderRight></BorderRight>
                </DropHeader>
            </Drop>
            {isOpen && (
                <DropContainer
                    style={{
                        zIndex: 999,
                        elevation: 0.5

                    }}>
                    <OptionsList>

                        {PositionOptions.map((option, id) => {
                            // const isActive = option === selectedValue

                            return <Option onPress={onSelect(option.uri)} key={id}>
                                <OptionText
                                // isActive={isActive}
                                >
                                    {option.uri}

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

export default DropFlagSelect;