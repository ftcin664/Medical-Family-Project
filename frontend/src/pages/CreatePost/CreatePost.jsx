import React from 'react'
import "./CreatePost.scss"
import PostUser from '../../assets/images/PostUser.png'
import { Button, Form, Image } from 'react-bootstrap'
import PhotoVideo from '../../assets/icons/post/create/PhotoVideo.svg'
import Mic from '../../assets/icons/post/create/Mic.svg'
import Video from '../../assets/icons/post/create/Video.svg'
import TagPeople from '../../assets/icons/post/create/TagPeople.svg'
import Feelings from '../../assets/icons/post/create/Smile.svg'
import Restrict from '../../assets/icons/post/create/Restrict.svg'
import Map from '../../assets/icons/post/create/Map.svg'
import Aa from '../../assets/icons/post/create/Aa.svg'

const postActions = [
    {
        id: 1,
        title: 'Photo/Video',
        image: PhotoVideo,
    },
    {
        id: 2,
        title: 'Audio',
        image: Mic,
    },
    {
        id: 3,
        title: 'Live video',
        image: Video,
    },
    {
        id: 4,
        title: 'Tag People',
        image: TagPeople,
    },
    {
        id: 5,
        title: 'Feeling/ Activity',
        image: Feelings,
    },
    {
        id: 6,
        title: 'Restrict Post',
        image: Restrict,
        radios: ['Me Only', 'Tagged only', 'Family only', 'Seal']
    },
    {
        id: 7,
        title: 'Check in',
        image: Map,
    },
    {
        id: 8,
        title: 'Background colour',
        image: Aa,
    },
]
const CreatePost = () => {
    return (
        <>

            <div className='post-first-line same_shadow_border p-3 bg_secondary mb-3'>
                <div className='mb-2'>
                    <Image className='avatar me-2' src={PostUser} />
                    <span className='title fw-500'>Tyler Tornberg</span>
                    <Button className="post-btn rounded-pill  py-1 float-end fw-400 " variant='dark'disabled>Post</Button>
                </div>
                <div className="py-5 my-5"></div>
            </div>
            <div className='same_shadow_border p-3 pb-0 bg_secondary mb-3 post-action'>
                <Form>
                    <span className='d-block same_poppins_3 fw-500 mb-3'>RealCheck*</span>

                    <div className="mb-3">
                        {['Edited media', 'Real and un-edited media', 'Wholly or partially computer-generated media'].map((type) => (
                            <Form.Check // prettier-ignore
                                type={'checkbox'}
                                id={`default-check`}
                                label={type}
                                className='grey-medium mb-2'
                            />

                        ))}
                    </div>
                    <span className='d-block same_poppins_3 fw-500 mb-3'>Classification*</span>

                    <div className="mb-3">
                        {['No nudity, sex,  violence or weapons', 'Contains nudity, sex, violence or weapons'].map((type) => (
                            <Form.Check // prettier-ignore
                                type={'checkbox'}
                                id={`default-check`}
                                label={type}
                                className='grey-medium mb-2'
                            />

                        ))}
                    </div>
                </Form>
            </div>
            <div className='same_shadow_border p-3 bg_secondary post-action'>
                <span className='action-top-line'></span>
                {postActions.length > 0 && postActions.map((obj, index) =>
                    <div key={index} className={(postActions.length - 1) !== index && `border-bottom image-actions`}>
                        <div  class="d-flex align-items-center grey-medium gap-3 py-3">
                            <div class="action-image ps-3">
                                <img className='img-fluid' src={obj.image} alt="" />
                            </div>
                            <div class="action-text">{obj.title}</div>
                        </div>
                        {obj.radios &&
                            <div className="radios d-flex ps-3 gap-3 mb-3 ">

                                {obj.radios.map((name, index) => (
                                    <Form.Check
                                        type='radio'
                                        name={obj.title}
                                        label={name}
                                        id={`disabled-default-${name}`}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default CreatePost
