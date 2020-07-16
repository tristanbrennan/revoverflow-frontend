import { Login } from '../models/login';
import { internalAxios } from './internal-Axios';


export const checkLoginCredentials = async (login: Login) => {
    const response = await internalAxios.post('/login', login);
    return response;
}