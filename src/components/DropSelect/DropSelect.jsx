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

const PositionOptions = [
    'Event Coordinator',
    "Restaurant Manager",
    "Talent Acquisition",
    "Corporate Talent Acquisition",
    "Music Director",
    "Organization Leader",
    "Other",
]

const DropSelect = ({ selectedValue, toggling, isOpen, onSelect }) => {

    const mainHeader = selectedValue || 'Choose your position'

    return (
        <DropBlock onPress={() => toggling(false)} >
            <Drop>
                <DropHeader onPress={() => toggling(!isOpen)} >
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
                    }}>
                    <OptionsList>

                        {PositionOptions.map((option, id) => {
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