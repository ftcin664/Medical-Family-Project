import React from 'react'
import './RequestCard.scss'
import User from "../../assets/icons/requestsCard/User.svg";
import UserIcon from "../../assets/icons/requestsCard/UserIcon.svg";
import Notification from "../../assets/icons/requestsCard/Notification.svg";
import { Button } from 'react-bootstrap';
const RequestCard = ({ type, title, subTitle, icon, user, onFirstClick, onSecondClick }) => {
    return (
        <div className='request-card px-3 mb-3'>
            <div className={`position-relative d-flex ${type === 'earlier' ? "align-items-center" : "align-items-start"} gap-3`}>
                {type !== 'earlier' && (<span className="status-circle top-0"></span>)}
                <div className="request-avatar">
                    {user ? <img className='user rounded-pill' src={user} alt="" /> : <img src={User} alt="" />}

                    {type === 'earlier' ? <img className='userIcon' src={icon} alt="" /> : (type === 'notification' ? <img className='userIcon' src={Notification} alt="" /> : <img className='userIcon' src={UserIcon} alt="" />)}

                </div>
                <div className="request-detail">
                    <span className='message mb-0 d-block'>{title}</span>
                    <span className='time'>{subTitle} </span>
                    {type === 'earlier' ?
                        ""
                        :
                        <div className="actions mt-2">
                            <Button onClick={onFirstClick} variant='transparent' className='reject-button rounded-pill py-2 px-5 me-3'>
                                {type === 'notification' ? "Delete" : "Reject"}
                            </Button>
                            <Button onClick={onSecondClick} variant='dark' className='accept-button rounded-pill py-2 px-5'>
                                {type === 'notification' ? "Publish" : "Accept"}
                            </Button>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default RequestCard
