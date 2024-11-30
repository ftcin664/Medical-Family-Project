import './Calender.scss'
import React, { useState } from 'react'
import MainCalendar from "../../components/MainCalendar/MainCalendar";
import date1oct2024Image from '../../assets/images/postsByDate/1st.jpg';
import date4oct2024Image from '../../assets/images/postsByDate/4th.png';
import date6oct2024Image from '../../assets/images/postsByDate/6th.jpg';
import date9oct2024Image from '../../assets/images/postsByDate/9th.jpg';
import date14oct2024Image from '../../assets/images/postsByDate/14th.jpg';
import date18oct2024Image from '../../assets/images/postsByDate/18th.jpg';
import date23oct2024Image from '../../assets/images/postsByDate/23rd.png';
import date28oct2024Image from '../../assets/images/postsByDate/28th.jpg';
import date31oct2024Image from '../../assets/images/postsByDate/31st.jpg';
const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <MainCalendar
      className='fullSizeCalendar mt-3'
      defaultView="month"
      onChange={setDate}
      value={date}
      tileContent={({ date, view }) => {
        const isOctober2024 = date.getMonth() === 9 && date.getFullYear() === 2024;
        const isHighlighted = [1, 4, 6, 9, 14, 18, 23, 28, 31].includes(date.getDate());
        const backgroundImage = isOctober2024 && isHighlighted ? {
          1: date1oct2024Image,
          4: date4oct2024Image,
          6: date6oct2024Image,
          9: date9oct2024Image,
          14: date14oct2024Image,
          18: date18oct2024Image,
          23: date23oct2024Image,
          28: date28oct2024Image,
          31: date31oct2024Image,
        }[date.getDate()] : null;
        return backgroundImage ?(
          <span
          className="calendar-tile"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {date.getDate()}
        </span>
        ):null;
      }}

    />
  )
}

export default Calender
