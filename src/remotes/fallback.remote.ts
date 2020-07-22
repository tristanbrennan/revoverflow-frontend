import { internalAxios } from './internal.axios'
import { Question } from '../models/question';
import { Answer } from '../models/answer';


export const getAllQuestions = async (size: number, page: number) => {
    const response = await internalAxios.get<any>(`/questions?size=${size}&page=${page}`);
    return response.data;
}

export const getQuestionsByUserId = async (id: number, size: number, page: number ) => {
    const response = await internalAxios.get<Question[]>(`/questions/user/${id}?size=${size}&page=${page}`);
    return response.data;
}

export const getAnswersByUserId = async (id: number, size: number, page: number) => {
    const response = await internalAxios.get<Question[]>(`/answers/user/${id}?size=${size}&page=${page}`);
    return response.data;
}

export const getUnconfirmedQuestions = async (size: number, page: number) => {
    const response = await internalAxios.get<Question[]>(`questions/status/false?size=${size}&page=${page}`);
    return response.data;
}

export const getQuestionByQuestionId = async (id: number) => {
    const response = await internalAxios.get<Question>(`/questions/id/${id}`);
    return response.data;
}

//! This route not available now 
export const getAnswerByAnswerId = async (id: number) => {
    const response = await internalAxios.get<Answer>(`/answers/id/${id}`);
    return response.data;
}

//! This route not available now 
export const getAnswersByQuestionId = async (id: number, size: number, page: number) => {
    const response = await internalAxios.get<Question[]>(`/answers/${id}?size=${size}&page=${page}`);
    return response.data;
}

export const updateQuestionAcceptedAnswerId = async (questionAcceptedAnswerId: Question) => {
    const response = await internalAxios.put<Question>(`/questions`, questionAcceptedAnswerId);
    return response;
}

export const updateQuestionStatus = async (questionStatus: any) => {
    const response = await internalAxios.put<Question>(`/questions/status`, questionStatus);
    return response;
}