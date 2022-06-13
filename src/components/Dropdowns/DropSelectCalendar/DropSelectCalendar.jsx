import React from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import F from '@/res/fonts'

// Helpers
import { dateConverter } from '@/components/helpers/dateConverter'

import CalendarArrow from './CalendarArrow/CalendarArrow'

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
    OptionText,
    CalendarHeaderText,
    CalendarHeader,
    CalendarHeaderArrows,
} = style;

const DropSelectCalendar = ({ setFilterDate }) => {

    const mainHeader = '' || 'Any date'

    const [isOpen, setIsOpen] = useState(false);

    const [isLeftArrowPress, setLeftArrowPress] = useState(false);
    console.log("🚀 ~ file: DropSelectCalendar.jsx ~ line 40 ~ DropSelectCalendar ~ isLeftArrowPress", isLeftArrowPress)
    const [isRightArrowPress, setRightArrowPress] = useState(false);

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
                            },
                            '2022-06-29': {
                                customStyles: {
                                    container: {
                                        backgroundColor: 'white',
                                        elevation: 2
                                    },
                                    text: {
                                        color: 'blue'
                                    }
                                }
                            }
                        }}
                        // Initially visible month. Default = now
                        initialDate={'2022-13-06'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2012-05-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2030-05-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={day => {
                            console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMMM yyyy'}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={direction => {
                            if (direction === 'left') {
                                return <CalendarArrow
                                    leftAction={setLeftArrowPress}
                                    rightAction={setRightArrowPress}
                                    direction={'left'} />
                            } else {
                                return <CalendarArrow
                                    leftAction={setLeftArrowPress}
                                    rightAction={setRightArrowPress}
                                    direction={'right'} />

                            }
                        }}
                        hideArrows={true}
                        // renderArrow={right => <CalendarArrow/> }
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => {
                            isLeftArrowPress === true ? subtractMonth() : null
                        }}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month

                        onPressArrowRight={addMonth => {
                            isRightArrowPress === true ? addMonth() : null
                        }}
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
                        renderHeader={(date) => {
                            const { monthFullName, year } = dateConverter(date)
                            return <CalendarHeader>
                                <CalendarHeaderText isHeader={true}>
                                    {monthFullName} {year}
                                </CalendarHeaderText>
                                <CalendarHeaderArrows>


                                </CalendarHeaderArrows>
                            </CalendarHeader>
                        }}
                        // Enable the option to swipe between months. Default = false
                        enableSwipeMonths={true}
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
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            disabledArrowColor: '#050505',
                            monthTextColor: 'black',
                            indicatorColor: 'blue',
                            textDayFontFamily: F.regular,
                            textMonthFontFamily: F.regular,
                            textDayHeaderFontFamily: F.regular,
                            textDayFontWeight: '400',
                            // textMonthFontWeight: 'bold',
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