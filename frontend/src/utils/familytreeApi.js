import axios from 'axios';
import { getLocalStorageData } from '../common/commonFunction/commonFunction';


export const familyTree = async (Id) => {
    const token = getLocalStorageData('token')
    const BASE_URL = import.meta.env.VITE_API_URL;
    try {
        const response = await axios.get(`${BASE_URL}/member/all-relations/${Id}`);
        return response.data;
    } catch (error) {
        if(error.response.status === 401){
            toast.error(error.response.data.message);
            clearLocalStorage()
            window.location.href='/login'
        }   
        throw error;
    }
}