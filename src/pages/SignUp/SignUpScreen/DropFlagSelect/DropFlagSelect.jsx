import React from "react";

// Images
import IMAGES from '@/res/images'
import C from '@/res/colors'
const {
    GoBackIcon,
    UsaIcon,
    JamaicaIcon,
    GermanyIcon,
    UnitedKingdomIcon,
    CanadaIcon,
    FranceIcon
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
    {
        uri: <UsaIcon width={24} height={16} />,
        phonePattern: [
            ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        ],
    },
    {
        uri: <JamaicaIcon width={24} height={16} />,
        phonePattern: [
            ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        ],
    },
    {
        uri: <GermanyIcon width={24} height={16} />,
        phonePattern: [
            ['+', '4', '9', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
        ],
    },
    {
        uri: <UnitedKingdomIcon width={24} height={16} />,
        phonePattern: [
            ['+', '4', '4', ' ', '(', /\d/, /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        ],
    },
    {
        uri: <CanadaIcon width={24} height={16} />,
        phonePattern: [
            ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        ],
    },
    {
        uri: <FranceIcon width={24} height={16} />,
        phonePattern: [
            ['+', '3', '3', ' ', /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]
        ],
    },
]

const DropFlagSelect = ({ selectedValue, toggling, isOpen, onSelect, inputFocus1, isError }) => {

    const mainHeader = selectedValue.icon || <UsaIcon width={24} height={16} />

    return (
        <DropBlock onPress={() => toggling(false)} >
            <Drop>
                <DropHeader
                    style={{
                        borderColor: isError ? C.red : inputFocus1,
                        borderWidth: isError ? 2 : 1,
                        borderBottomLeftRadius: isOpen === true ? 0 : 6,
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
                        borderTopLeftRadius: isOpen === true ? 0 : 6,
                        borderTopRightRadius: isOpen === true ? 0 : 6,
                    }}>
                    <OptionsList>

                        {PositionOptions.map((option, id) => {
                            // const isActive = option === selectedValue

                            return <Option onPress={onSelect({
                                icon: option.uri,
                                phonePattern: option.phonePattern,

                            })} key={id}>
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