import axios from 'axios';
import { END_POINTS } from '../common/endPoints';

const BASE_URL = import.meta.env.VITE_API_URL;

const login = async (phone, password) => {
    console.log('inside login' , phone, password);
    
    try {
        const response = await axios.post(`${BASE_URL}/${END_POINTS.LOGIN}`, { email:phone, password });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export { login };