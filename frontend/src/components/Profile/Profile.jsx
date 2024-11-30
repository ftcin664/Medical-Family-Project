import React, { useState } from 'react';
import './Profile.scss'
import User from '../../assets/images/Profile-1.jpg'
import Verified from '../../assets/images/Verified.svg'
import LinkIcon from '../../assets/icons/post/Link-icon.svg'
import PpCoin from '../../assets/images/PP-coin.svg'
import { Button, Form, Image, Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import LeftArroow from '../../assets/images/LeftArrow.svg'
import Post from '../Post/Post';
import Photo1 from '../../assets/images/post/Post-1.png'
import Photo2 from '../../assets/images/post/Post-2.png'
import Photo3 from '../../assets/images/post/Post-3.png'
import Video1 from '../../assets/images/video/Video-Imag-1.png'
import Video2 from '../../assets/images/video/Video-Imag-2.png'
import Video3 from '../../assets/images/video/Video-Imag-3.png'
import GalleryIcon from '../../assets/images/Gallery Icon.svg'
import VideoIcon1 from '../../assets/images/Video_Icon.svg'
import CommonModal from '../CommonModal/CommonModal';


const info = {
  email: 'John234@gmail.com',
  dob: "02/12/2024",
  gender: "Male",
  location: "Dollas, US",
  age: "36",
}
const Profile = () => {
  const [privacySetting, setPrivacySetting] = useState(true);
  const settings = [
    {
      id: 1,
      name: "Reported accounts",
      to: "#"
    },
    {
      id: 2,
      name: "Help & Support",
      to: "#"
    },
    {
      id: 3,
      name: "Terms of use",
      to: "#"
    },
    {
      id: 4,
      name: "Privacy policy",
      to: "#"
    },
    {
      id: 5,
      name: "Manage Notification",
      to: "#"
    },
    {
      id: 6,
      name: "Privacy Settings",
      to: "#",
      handleClick: () => {
        setPrivacySetting(!privacySetting)
      }
    },
  ]
  return (
    <div className='profile'>
      <div className='line-card d-flex gap-2 align-items-center bg_secondary py-3 px-2 mb-3 rounded_border'>
        <Image className='user-img rounded-pill' src={User} />
        <div>
          <div className="fw-bold userTitle d-flex align-items-center">
            Martha Craig
            <Image className='ms-1 verified' src={Verified} />
            <Link>
              <Image className='ms-1 link' src={LinkIcon} />
            </Link>
          </div>
          <div className="userSubTitle">
            1946 , Dallas , US  <br />
            <span className='fw-bold clr_primary'>10</span>
            <Image className='ms-1 link' src={PpCoin} />
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="profile-statics bg_secondary rounded_border d-flex gap-3 py-3 px-3 mb-3">
        <span className='count'>
          <span className='number fw-bold'>100</span>{" "}
          Post
        </span>
        <span className='count'>
          <span className='number fw-bold'>1.1K</span>{" "}
          Followers
        </span>
        <span className='count'>
          <span className='number fw-bold'>200</span>{" "}
          Following
        </span>
      </div>
      <Tab.Container className="my-4" id="left-tabs-example" defaultActiveKey="setting">
        <Nav defaultActiveKey="setting" variant="pills" className="flex-row common-tabs mb-3 gap-3">
          <Nav.Item>
            <Nav.Link className='px-4' eventKey="setting" >Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='px-4' eventKey="info">Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='px-4' eventKey="post">Posts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='px-4' eventKey="photos">Photos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='px-4' eventKey="videos">Videos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="setting">
            {settings.length > 0 && settings.map((setting, index) => (
              <Link onClick={setting.handleClick ? setting.handleClick : (() => (false))} key={index} to='#' className='d-flex justify-content-between align-items-center rounded_border bg_secondary text-decoration-none py-6 px-3 mb-3'>
                <span className='same_poppins_4 fw-500 fs-6'>
                  {setting.name}
                </span>
                <Button variant='dark' className=' bg_primary rounded-pill small-arrow-btn'>
                  <Image className='rotate-180 img-fluid' src={LeftArroow} />
                </Button>
              </Link>

            ))}
          </Tab.Pane>
          <Tab.Pane eventKey="info">
            {info &&
              <>
                <div className="rounded_border bg_secondary py-3 px-3 mb-4">
                  <div className="d-flex justify-content-between mb-3">
                    <span className='same_poppins_2 fs- fw-500'>Email :</span>
                    <span className='same_poppins_2 grey_dark'>{info.email}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className='same_poppins_2 fs- fw-500'>DOB :</span>
                    <span className='same_poppins_2 grey_dark'>{info.dob}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className='same_poppins_2 fs- fw-500'>Gender :</span>
                    <span className='same_poppins_2 grey_dark'>{info.gender}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className='same_poppins_2 fs- fw-500'>Location :</span>
                    <span className='same_poppins_2 grey_dark'>{info.location}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className='same_poppins_2 fs- fw-500'>Age :</span>
                    <span className='same_poppins_2 grey_dark'>{info.age}</span>
                  </div>
                </div>
                <Button variant='dark' className='dark_btn d-block rounded-pill mx-auto fw-normal min-w-380 py-2 px-5 mb-3'>
                  Edit Profile
                </Button>
              </>
            }
          </Tab.Pane>
          <Tab.Pane eventKey="post">
            <Post />
          </Tab.Pane>
          <Tab.Pane eventKey="photos">
            <div className="photos m-0">
              <div className="col-sm-12 col-md-8 float-end first">
                <Link>
                  <Image src={Photo1} />
                </Link>
              </div>
              <div className="col-sm-12 col-md-4 float-end second position-relative ">
                <Link>
                  <Image className='position-absolute z-5' src={GalleryIcon} />
                  <Image src={Photo2} />
                </Link>
              </div>
              <div className="col-sm-12 col-md-4 float-end third">
                <Link>
                  <Image src={Photo3} />
                </Link>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="videos">
            <div className="row videos m-0">
              <div className="col-sm-12 col-md-4 p-0 position-relative">
                <Link>
                  <Image src={VideoIcon1} className='position-absolute z-5' />
                  <Image src={Video1} />
                </Link>
              </div>
              <div className="col-sm-12 col-md-4 p-0 position-relative">
                <Link>
                  <Image src={VideoIcon1} className='position-absolute z-5' />
                  <Image src={Video2} />
                </Link>
              </div>
              <div className="col-sm-12 col-md-4 p-0 position-relative">
                <Link>
                  <Image src={VideoIcon1} className='position-absolute z-5' />
                  <Image src={Video3} />
                </Link>
              </div>

            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <CommonModal title="Privacy Settings" show={privacySetting} onHide={() => setPrivacySetting(false)} submitBtnTxt='Save' hideFirstAction>
        <div className="form-outline mb-4">
          <div>
            <Form.Check // prettier-ignore
              className='mb-3 grey_dark poppins_font'
              type="radio"
              id={`private`}
              label={`PRIVATE`}
            />
            <Form.Check // prettier-ignore
            className='mb-3 grey_dark poppins_font'
              type="radio"
              id={`familyOnly`}
              label={`FAMILY ONLY`}
            />
            <Form.Check // prettier-ignore
            className='mb-3 grey_dark poppins_font'
              type="radio"
              id={`followersOnly`}
              label={`FOLLOWERS ONLY`}
            />
          </div>

        </div>
      </CommonModal>
    </div>
  )
}

export default Profile


