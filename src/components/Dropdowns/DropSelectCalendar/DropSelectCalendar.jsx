import React from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import F from '@/res/fonts'

// Helpers
import { dateConverter } from '@/components/helpers/dateConverter'
import CalendarArrow from './CalendarArrow/CalendarArrow'

import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    CalendarIcon,
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
    OptionText,
    CalendarHeaderText,
    CalendarHeader,
    CalendarHeaderArrows,
} = style;

import { M } from '@/res/mixin'
const {

    FormInputLabel
} = M
const DropSelectCalendar = ({ setFilterDate }) => {

    const [placeholder, setPlaceholder] = useState('');
    const mainHeader = placeholder || 'Any date'

    const [isOpen, setIsOpen] = useState(false);

    const toggling = (state) => setIsOpen(state);
    const onPositionSelect = value => () => { setSortType(value); setIsOpen(false); };
    const now = new Date()
    const day = now.getDate()
    const month = (now.getMonth() + 1)
    const monthWitZero = month < 10 ? `0${month}` : month
    const year = now.getFullYear()
    const todayString = `${year}-${monthWitZero}-${day}`

    // useEffect(() => {
    //     console.log("🚀 ~ file: SearchFilters.jsx ~ line 58 ~ useEffect ~ chosenLocation", chosenDate)
    // }, [chosenDate]);
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
                    onPress={() => toggling(!isOpen)} >
                    {/* Label */}
                    <FormInputLabel inputLabel={placeholder.length > 0}>Date</FormInputLabel>
                    <OptionText isHeader={true}>
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
            {isOpen && (
                <DropContainer
                    nestedScrollEnabled={true}
                    style={{
                        borderTopLeftRadius: isOpen === true ? 0 : 6,
                        borderTopRightRadius: isOpen === true ? 0 : 6,
                        elevation: 4,
                    }}
                >
                    <Calendar
                        // dayComponent={({ date, state }) => {
                        //     return (
                        //         <TouchableOpacity>
                        //             <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>{date.day}</Text>
                        //         </TouchableOpacity>
                        //     );
                        // }}
                        markingType={'custom'}
                        markedDates={{

                            todayString: {
                                customStyles: {
                                    container: {
                                        backgroundColor: 'green'
                                    },
                                    text: {
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }
                                }
                            }
                        }}
                        showTodayButton={true}
                        // Initially visible month. Default = now
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2022-06-06'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2030-05-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => {
                            console.log('selected day', day);
                            setPlaceholder(day.dateString)
                            setIsOpen(false)
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={day => {
                            setPlaceholder(day.dateString)
                            setIsOpen(false)
                            console.log('selected day', day);
                        }}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={direction => {
                            if (direction === 'left') {
                                return <CalendarArrow

                                    direction={'left'} />
                            } else {
                                return <CalendarArrow
                                    direction={'right'} />
                            }
                        }}

                        hideArrows={false}
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        // disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month

                        onPressArrowRight={addMonth => addMonth()}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}
                        // Replace default month and year title with custom one. the function receive a date as parameter
                        // renderHeader={date => {
                        //     /*Return JSX*/
                        //     console.log("🚀 ~ file: DropSelectCalendar.jsx ~ line 99 ~ DropSelectCalendar ~ date", date)
                        //     return <CalendarHeaderText isHeader={true}>
                        //         {`${date}`}
                        //     </CalendarHeaderText>
                        // }}
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        // renderHeader={(date) => {
                        //     const dateStr = date.toISOString();
                        //     const endIndex = dateStr.indexOf("T");
                        //     const clearDate = dateStr.slice(0, endIndex)
                        //     const { monthFullName, year } = dateConverter(clearDate)
                        //     return <CalendarHeader>
                        //         <CalendarHeaderText>
                        //             {monthFullName} {year}
                        //         </CalendarHeaderText>
                        //         <CalendarHeaderArrows>


                        //         </CalendarHeaderArrows>
                        //     </CalendarHeader>
                        // }}
                        // Enable the option to swipe between months. Default = false
                        style={{

                        }}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            todayBackgroundcolor: '#00adf5',
                            dayTextColor: C.black,
                            textDisabledColor: '#d9e1e8',
                            disabledArrowColor: '#050505',
                            monthTextColor: 'black',
                            indicatorColor: 'blue',
                            textDayFontFamily: F.regular,
                            textMonthFontFamily: F.bold,
                            textDayHeaderFontFamily: F.regular,
                            textDayFontWeight: '400',
                            textDayHeaderFontWeight: '400',
                            textDayFontSize: 17,
                            textMonthFontSize: 17,
                            textDayHeaderFontSize: 15,
                            arrowColor: 'black',
                            'stylesheet.calendar.header': {
                                week: {
                                    marginTop: 5,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                },
                                dayTextAtIndex0: {
                                    textTransform: 'uppercase',
                                    color: 'red'
                                },
                                dayTextAtIndex6: {
                                    color: 'blue'
                                }
                            }
                        }}
                    />
                </DropContainer>
            )}
        </DropBlock>
    );
}

export default DropSelectCalendar;