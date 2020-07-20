import { internalAxios } from './internal.axios';
import { User } from '../models/user';


export const getUserData = async (user: User) => {
    const response = await internalAxios.get('/user')
    return response;
}