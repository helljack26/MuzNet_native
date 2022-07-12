import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Agenda } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { S } from '@/res/strings'

import EventItem from '../EventItem'
// Helpers
import { dateConverter } from '@/components/helpers/dateConverter'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { agendaDateConverter } from '@/components/helpers/agendaDateConverter'

// Images
import IMAGES from '@/res/images'
const {
    CalendarIcon,
    ErrorIcon,
} = IMAGES;

// Styles
import { style } from './style'
const {
    Container,
    OptionText,
} = style;

import { M } from '@/res/mixin'
const {
    PlainText20,
    PlainText17,
    MediumText20,
    FormInputLabel,
    ErrorMessage,
    ShowPasswordIconButton
} = M;

// Store
import { observer } from 'mobx-react-lite';
import { useAccountApiStore } from '@/stores/AccountApi';

const convertToAgentaDate = (date) => {
    const splitedDate = date.split('/')
    const correctDate = `20${splitedDate[2]}-${splitedDate[0]}-${splitedDate[1]}`
    return correctDate
}

const CalendarBlock = observer(({ isContractor }) => {
    const navigation = useNavigation();
    const { windowHeight, windowWidth } = getWindowDimension()

    const [placeholder, setPlaceholder] = useState('');

    // Event from store
    const { contractorAccountDataApi, musicianAccountDataApi, setOpenTabs } = useAccountApiStore();

    // Is collapsed calendar
    const [isOpen, setIsOpen] = useState(false);
    // Current date
    const [currentDate, setCurrentDate] = useState('');
    // Month title
    const [monthTitle, setMonthTitle] = useState('');
    // If change month
    const onMonthChange = (date) => {
        const { monthFullName } = agendaDateConverter({ month: date.month })
        const headerTitle = `${monthFullName} ${date.year}`
        setMonthTitle(headerTitle)
    };

    // Is contractor data
    const storedData = isContractor === true ? contractorAccountDataApi[0].userDeals.activeDeals : musicianAccountDataApi[0].userDeals.activeDeals

    // Local items and mark state 
    const [localItems, setLocalItems] = useState({});
    const [localMark, setLocalMark] = useState({});


    const setLocalData = () => {
        let correctItemData = {}
        let correctMarkData = {}

        storedData.forEach((evData, id) => {
            const getDateFromMs = new Date(evData.adDate.milliseconds).toLocaleDateString()
            const correctDate = convertToAgentaDate(getDateFromMs)
            const correctEvent = `${correctDate}`
            const isExistDateKeys = Object.keys(correctItemData)
            const isAlreadyExist = isExistDateKeys.find((key) => key === correctEvent)

            if (isAlreadyExist !== undefined) {
                correctItemData[correctEvent] = [...correctItemData[correctEvent], {
                    dealUserName: evData.dealUserName,
                    adDate: evData.adDate,
                    eventStart: evData.eventStart,
                    eventEnd: evData.eventEnd,
                    adTitle: evData.adTitle,
                    adLocation: evData.adLocation,
                }]

            } else {
                correctItemData = {
                    ...correctItemData, [correctEvent]: [
                        {
                            dealUserName: evData.dealUserName,
                            adDate: evData.adDate,
                            eventStart: evData.eventStart,
                            eventEnd: evData.eventEnd,
                            adTitle: evData.adTitle,
                            adLocation: evData.adLocation,
                        }]
                }
            }

            correctMarkData = {
                ...correctMarkData, [correctEvent]: { marked: true }
            }
        });

        setLocalItems(correctItemData)
        setLocalMark(correctMarkData)
    }

    // Initial set current month and date  
    useEffect(() => {
        setLocalData()
    }, [storedData]);

    // Initial set current month and date  
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const currentMonth = new Date().getMonth()
            const currentYear = new Date().getFullYear()
            const date = {
                month: currentMonth + 1,
                year: currentYear,
            }
            onMonthChange(date)

            const now = new Date().toLocaleDateString()
            const correctDate = convertToAgentaDate(now)
            setCurrentDate(correctDate)
        });

        return unsubscribe;

    }, [navigation]);

    const containerHeight = windowHeight - 260
    return (
        <Container
            style={{
                height: containerHeight,
            }}
        >
            {!isOpen && <OptionText >
                {monthTitle}
            </OptionText>}
            <Agenda
                showOnlySelectedDayItems={true}
                scrollToNextEvent={false}
                avoidDateUpdates={true}

                enableSwipeMonths={false}
                staticHeader={false}
                items={localItems}
                markedDates={localMark}
                onCalendarToggled={calendarOpened => { setIsOpen(calendarOpened) }}
                // Callback that gets called on day press
                onDayPress={day => { onMonthChange(day) }}
                // Callback that gets called when day changes while scrolling agenda list
                onDayChange={day => { console.log('day changed'); }}
                // Initially selected day
                selected={currentDate}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={currentDate}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2050-07-11'}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Specify how each item should be rendered in agenda
                renderItem={(item) => <EventItem eventData={item} />}
                // Specify how each date should be rendered. day can be undefined if the item is not first in that day
                renderDay={() => { return <View></View>; }}
                // Specify how empty date content with no items should be rendered
                renderEmptyData={() => {
                    return <View><MediumText20 style={{ marginTop: 12, textAlign: 'center' }}>No events on this date</MediumText20></View>;
                }}
                // Specify how agenda knob should look like
                renderKnob={() => { return <View style={{ width: 32, height: 5, borderRadius: 3, marginTop: 10, backgroundColor: C.black, }} />; }}
                showClosingKnob={true}
                // Specify your item comparison function for increased performance
                rowHasChanged={(r1, r2) => {
                    return r1.text !== r2.text;
                }}
                hideArrows={true}
                // renderArrow={(direction) => direction === 'left' ? <CalendarArrow direction={'left'} /> : < CalendarArrow />}
                // Set this true while waiting for new data from a refresh
                refreshing={false}

                // Agenda container style
                style={{
                    height: containerHeight,
                }}
                theme={{
                    dotColor: C.black,
                    backgroundColor: C.white,
                    agendaDayTextColor: C.sBlack,
                    agendaDayNumColor: C.sBlack,
                    agendaTodayColor: C.black,
                    todayBackgroundColor: C.black,
                    todayTextColor: C.gray,
                    selectedDayBackgroundColor: C.black,
                }}
            />
        </Container>
    );
})

export default CalendarBlock;
