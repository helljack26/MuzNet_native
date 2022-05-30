import React from "react";
import { useState } from 'react'
// Icon
import { AntDesign } from '@expo/vector-icons';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import dateConverter from "@/components/helpers/dateConverter";

// Images
import IMAGES from '@/res/images'
const {
    CalendarIcon
} = IMAGES;
// Styles
import { style } from './style'
import C from "@/res/colors";
const {
    DropBlock,
    Drop,
    DropHeader,
    DropContainer,
    OptionsList,
    Option,
    OptionText,
    FormDateInputBlock,
    FormDateInputPlaceHolder,
    FormDateInputPlaceHolderText,
} = style;

const DropSelect = ({ selectOptions, selectedValue, toggling, isOpen, onSelect,
    isCurrency, isDeadlineSelect, dateInputPlaceHolder, setDateInputPlaceHolder }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dateString = dateConverter(`${date}`)
        setDateInputPlaceHolder(dateString)
        hideDatePicker();
        toggling(false)
    };
    const mainHeader = selectedValue || 'Выбрать'
    const currencyHeader = selectedValue
    const isMainHeader = !isCurrency ? mainHeader : currencyHeader

    return (
        <>
            <DropBlock onPress={() => toggling(false)} >
                <Drop>
                    <DropHeader onPress={() => toggling(!isOpen)} >
                        <OptionText>
                            {isMainHeader}
                        </OptionText>
                        <AntDesign name={isOpen ? 'up' : 'down'} size={15} color="black" />
                    </DropHeader>
                </Drop>
                {isOpen && (
                    <DropContainer
                        nestedScrollEnabled={true}
                        style={{
                            zIndex: 999,
                            elevation: 3
                        }}>
                        <OptionsList>
                            {!isCurrency && <Option onPress={onSelect('Выбрать')}>
                                <OptionText>
                                    Выбрать
                                </OptionText>
                            </Option>}
                            {selectOptions.map((option, id) => {
                                const isActive = option === selectedValue

                                return <Option
                                    isActive={isActive}
                                    onPress={onSelect(option)} key={id}>
                                    <OptionText>
                                        {option}
                                    </OptionText>
                                </Option>
                            }
                            )
                            }
                            {isDeadlineSelect === true && <FormDateInputBlock>
                                <FormDateInputPlaceHolder onPress={showDatePicker}  >
                                    <FormDateInputPlaceHolderText>
                                        {dateInputPlaceHolder === undefined ? 'dd/mm/yyyy' : dateInputPlaceHolder}
                                    </FormDateInputPlaceHolderText>
                                    <CalendarIcon width={15} height={15} />
                                </FormDateInputPlaceHolder>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </FormDateInputBlock>
                            }
                        </OptionsList>
                    </DropContainer>
                )}
            </DropBlock>
        </>
    );
}

export default DropSelect;