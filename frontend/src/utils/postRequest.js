import axios from 'axios';
import { clearLocalStorage, getLocalStorageData } from '../common/commonFunction/commonFunction';
import { toast } from 'react-toastify';

export const postApiRequest = async (endPoint, data) => {
    const token = getLocalStorageData('token')
    const BASE_URL = import.meta.env.VITE_API_URL;
    console.log("BASE_URL", BASE_URL);
    try {
        const response = await axios.post(`${BASE_URL}/${endPoint}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
        if(error.response.status === 401){
            toast.error(error.response.data.message);
            clearLocalStorage()
            window.location.href='/login'
        } else if(error.response.status === 403) {
            toast.error("You must login at first.");
            clearLocalStorage();
            window.location.href='/login';
        }
        throw error;
    }
}