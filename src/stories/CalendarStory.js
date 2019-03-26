import * as React from 'react';
import Calendars from '../components/Calendar';
import CalendarContainer from '../components/Calendar/CalendarContainer';
import {FaCalendar} from 'react-icons/fa';

const CalendarStory = () => (
    <div style={{margin: '100px'}}>
        <CalendarContainer header={{icon: <FaCalendar />, title: 'CORPORATE CALENDAR'}}>
            <Calendars/>
        </CalendarContainer>
    </div>
)

export default CalendarStory;
