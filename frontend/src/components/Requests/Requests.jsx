import React, { useEffect, useState } from 'react'
import './Requests.scss'
import RequestCard from '../RequestCard/RequestCard'
import { getApiRequest } from '../../utils/getApiRequest';
import { END_POINTS } from '../../common/endPoints';
import { getTimeAgo } from '../../utils/time';
import { postApiRequest } from '../../utils/postRequest';
import { toast } from 'react-toastify';

const Requests = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await getApiRequest(END_POINTS.GET_REQUESTS + "?filter=Pending");
            // console.log(response)
            setRequests(response);
        }
        fetchRequests();
    }, [])

    const onReject = async (requestId) => {
        try {
            const response = await postApiRequest(END_POINTS.UPDATE_REQUEST_STATUS, {
                requestId,
                status: "Declined",
            })
        setRequests(requests.filter(request => request.id !== requestId));
        } catch (error) {
            toast.error("Error!")
        }
    }

    const onAccept = async (requestId) => {
        try {
            const response = await postApiRequest(END_POINTS.UPDATE_REQUEST_STATUS, {
                requestId,
                status: "Accepted",
            })
        setRequests(requests.filter(request => request.id !== requestId));
        } catch (error) {
            toast.error("Error!")
        }
    }

    return (
        <div className='requests-container'>
            {
                !requests || requests.length == 0 ? (
                    <p>
                        There are no requests.
                    </p>
                ) : (
                    //Rachel Podrez is inviting you, as a cousin, to be included in the family tree.
                    requests.map((request, index) => (
                        <RequestCard
                            key={index}
                            type='earlier'
                            title={`${request.RequestingUser.fullname} is inviting you, as a ${request.relationship_type}, to be included in the family tree.`}
                            icon={request.icon}
                            subTitle={getTimeAgo(request.createdAt)}
                            user={request.RequestingUser.image_url}
                            onFirstClick={() => onReject(request.id)}
                            onSecondClick={() => onAccept(request.id)}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Requests
