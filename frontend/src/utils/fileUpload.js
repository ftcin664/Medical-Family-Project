import axios from 'axios';
import { clearLocalStorage, getLocalStorageData } from '../common/commonFunction/commonFunction';
import { toast } from 'react-toastify';

export const fileUploadApi = async (endPoint, formData) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const token = getLocalStorageData('token')
    try {
        const response = await axios.post(`${BASE_URL}/${endPoint}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        if (error.response.status === 401) {
            toast.error(error.response.data.message);
            clearLocalStorage()
            window.location.href = '/login'
        } else if (error.response.status === 403) {
            toast.error("You must login at first.");
            clearLocalStorage();
            window.location.href = '/login';
        }
        throw error;
    }
}