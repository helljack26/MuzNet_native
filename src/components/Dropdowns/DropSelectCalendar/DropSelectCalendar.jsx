import React from 'react';
import { SafeAreaView, StyleSheet, View, Keyboard } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';
import F from '@/res/fonts'
import C from '@/res/colors'

// Helpers
import { dateConverter } from '@/components/helpers/dateConverter'
import CalendarArrow from './CalendarArrow/CalendarArrow'
import CalendarPicker from 'react-native-calendar-picker';

// Images
import IMAGES from '@/res/images'
const {
    CalendarIcon,
} = IMAGES;

// Styles
import { style } from './style'
const {
    DropBlock,
    Drop,
    DropHeader,
    ArrowBlock,
    DropContainer,
    OptionText,
} = style;

import { M } from '@/res/mixin'
const {
    FormInputLabel
} = M;
const customDayHeaderStylesCallback = ({ dayOfWeek, month, year }) => {
    if (dayOfWeek) {
        return {
            textStyle: {
                color: '#C4C4C6',
                fontSize: 12,
                fontFamily: F.bold,
            }
        };
    }
}
const DropSelectCalendar = ({ isResetAll, isCloseAllDropdown, setFilterDate, setCalendarOpen, placeholderText, isExistedDate }) => {
    const navigation = useNavigation();

    const [placeholder, setPlaceholder] = useState('');
    const mainHeader = placeholder || placeholderText
    const [isOpen, setIsOpen] = useState(false);

    const calendarRef = useRef();

    const toggling = (state) => setIsOpen(state);

    const onDateChange = (date) => {
        const dateStr = date.toString()
        const { day, monthFullName, weekFullName } = dateConverter(dateStr)

        // Get millisecond
        const millisecondForFilter = new Date(dateStr).getTime()

        const croppedMonth = monthFullName.slice(0, 3)
        const placeholderString = `${weekFullName}, ${croppedMonth} ${day}`
        setIsOpen(false)
        // For parent filters
        setCalendarOpen(false)
        setPlaceholder(placeholderString)
        setFilterDate({
            milliseconds: millisecondForFilter,
            string: placeholderString,
        })
    };

    useEffect(() => {
        if (isExistedDate !== undefined) {
            setPlaceholder(isExistedDate.string)
            setFilterDate({
                milliseconds: isExistedDate.milliseconds,
                string: isExistedDate.string,
            })
        }
    }, [isExistedDate]);

    // If resetAll
    useEffect(() => {
        if (isResetAll === true) {
            setPlaceholder('')
            setIsOpen(false)
            setCalendarOpen(false)
            calendarRef.current.resetSelections()

        }
        if (isResetAll === true && isExistedDate !== undefined) {
            setPlaceholder(isExistedDate.string)
            setFilterDate({
                milliseconds: isExistedDate.milliseconds,
                string: isExistedDate.string,
            })
        }
    }, [isResetAll, isExistedDate]);
    useEffect(() => {
        if (isCloseAllDropdown === true) {
            setIsOpen(false)
            setCalendarOpen(false)
        }
    }, [isCloseAllDropdown]);
    return (
        <DropBlock
            onPress={() => toggling(false)} >
            <Drop>
                <DropHeader
                    style={{
                        paddingTop: placeholder.length > 0 ? 15 : 0,
                        borderBottomWidth: isOpen === true ? 0 : 1,
                        borderBottomLeftRadius: isOpen === true ? 0 : 6,
                        borderBottomRightRadius: isOpen === true ? 0 : 6,
                        elevation: isOpen === true ? 5 : 0,
                    }}
                    onPress={() => {
                        toggling(!isOpen)
                        setCalendarOpen(!isOpen)
                        Keyboard.dismiss()
                    }} >
                    {/* Label */}
                    <FormInputLabel inputLabel={placeholder.length > 0}>Date</FormInputLabel>
                    <OptionText isPlaceholder={placeholder.length === 0}>
                        {mainHeader}
                    </OptionText>
                    <ArrowBlock
                        style={{
                            top: placeholder.length > 0 ? -8 : 0,
                        }}>
                        <CalendarIcon width={18} height={20} />
                    </ArrowBlock>
                </DropHeader>
            </Drop>
            <DropContainer
                nestedScrollEnabled={true}
                style={{
                    borderTopLeftRadius: isOpen === true ? 0 : 6,
                    borderTopRightRadius: isOpen === true ? 0 : 6,
                    elevation: isOpen === true ? 4 : 0,
                    width: isOpen === true ? '100%' : 0,
                    height: isOpen !== true ? 0 : undefined
                }}
            >
                <View style={styles.container}>
                    <CalendarPicker
                        ref={calendarRef}
                        onDateChange={onDateChange}
                        startFromMonday={true}
                        showDayStragglers={true}
                        allowRangeSelection={false}
                        minDate={new Date()}
                        maxDate={new Date(2050, 6, 3)}
                        weekdays={['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']}
                        months={['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]}
                        nextComponent={<CalendarArrow />}
                        previousComponent={<CalendarArrow direction={'left'} />}

                        // Today
                        todayTextStyle={{
                            color: C.white,
                            backgroundColor: C.sBlack,
                            width: 35,
                            height: 40,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            borderRadius: 8
                        }}
                        scaleFactor={375}
                        textStyle={{
                            fontFamily: F.regular,
                            color: C.black,
                            fontSize: 17,
                        }}
                        // Selected day
                        selectedDayStyle={{
                            backgroundColor: C.black,
                            width: 35,
                            height: 40,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            borderRadius: 8
                        }}
                        selectedDayTextStyle={{
                            color: 'white'
                        }}
                        // Header
                        monthTitleStyle={{
                            fontFamily: F.bold,
                            color: C.black,
                            fontSize: 18,
                        }}
                        yearTitleStyle={{
                            fontFamily: F.bold,
                            color: C.black,
                            fontSize: 18,
                        }}
                        customDayHeaderStyles={customDayHeaderStylesCallback}
                        headerWrapperStyle={{
                            paddingHorizontal: 16,
                            paddingVertical: 0,
                        }}
                        dayLabelsWrapper={{
                            paddingVertical: 0,
                            marginHorizontal: 16,
                            width: '100%',
                            borderTopColor: 'white',
                            borderBottomColor: 'white'
                        }}
                    />
                </View>
            </DropContainer>

        </DropBlock>
    );
}

export default DropSelectCalendar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 10,
    },

});