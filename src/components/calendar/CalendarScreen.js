import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es-mx';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es');
const localizer = momentLocalizer(moment);



export const CalendarScreen = () => {

  //TODO: leer del store, los eventos.
  const {events}=useSelector(state=>state.calendar)

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');
  //const {modalOpen}=useSelector(state=>state.ui)
  const dispatch=useDispatch();
  const onDoubleClick=(e)=>{
    //console.log('abir modal');
    //modalOpen.value=true;
    dispatch(uiOpenModal())
  }

  const onSelectEvent=(e)=>{
    dispatch(eventSetActive(e));
    dispatch(uiOpenModal())
  }
  
  const onViewChange=(e)=>{
    setlastView(e);
    localStorage.setItem('lastView',e);
  }

  const eventStyleGetter=(event,start,end,isSelected)=>{
      console.log(event,start,end,isSelected);
      const style={
        backgroundColor:'#367CF7',
        borderRadius:'0px',
        opacity:0.8,
        dsplay:'block',
        color:'white'
      }

      return{
        style
      }
  };

  return (
    <div className='calendar-screen'>
        <Navbar/>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          view={lastView}
          components={{
            event:CalendarEvent
          }}
        />

        <AddNewFab/>

        <CalendarModal/>
    </div>
  )
}
