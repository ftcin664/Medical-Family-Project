
import "./EventLine.scss";
import { Button, Container, Dropdown, Form } from 'react-bootstrap';
import SmallAvatar from '../../assets/images/Small-avatar.png'
import ThreeDots from '../../assets/images/3 dots.svg'
import ProfileImage from "../../assets/icons/navigation/Profile.png";
import MainCalendar from "../MainCalendar/MainCalendar";
import { useState } from "react";
import CommonModal from "../CommonModal/CommonModal";
import { useNavigate } from "react-router-dom";
const EventLine = () => {
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const disablePastDates = ({ date }) => {
    const today = new Date();
    return date < today.setHours(0, 0, 0, 0);  // Disable all dates before today
  };
  const onSubmit = () => {
    navigate('/post')
  }
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
    const newDate = new Date(value);
    newDate.setFullYear(parseInt(event.target.value));
    onChange(newDate);
  };
  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year <= currentYear + 10; year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>

    );
  }
  return (
    <>
      {/* <div className="large-event-line bg_secondary d-flex justify-content-between align-items-center p-3 mb-3">
        <div className="d-flex align-items-center">
          <img className="avatar me-2 rounded-pill" src={ProfileImage} />
          <div className="ps-1">

            <span className="title">Erica Sinclair</span>
            <span className="address d-block">
              Dallas , US
            </span>
          </div>
        </div>
        <div className='year-selector-medium with-calendar'>
          <Form.Select className='border-0' value={selectedYear} onChange={handleYearChange} aria-label="Default select example">
            {yearOptions}
          </Form.Select>
        </div>
      </div> */}
      <div onClick={() => setCalendar(true)} className="event-line bg_secondary d-flex justify-content-between align-items-center p-3 ">
        <div className="">
          <img className="avatar me-2 rounded-pill" src={ProfileImage} />
          <span className="ps-1">Rmmbr</span>
        </div>
        <Button className="post-line-btn p-0" variant="transparent">
          <img className="img-fluid" src={ThreeDots} />
        </Button>
      </div>
      <CommonModal className='calendar-modal' title='Event Date' show={calendar} onHide={() => setCalendar(false)} submitBtnTxt="Confirm" secondButtonAction={onSubmit} hideFirstAction hideClose>
        <MainCalendar
          className='mt-3'
          defaultView="month"
          onChange={setDate}
          value={date}
        />
      </CommonModal>
    </>
  )
}

export default EventLine
