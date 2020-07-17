/**
@author
Jordon Hill
*/

import Axios from 'axios';
import { Question } from '../models/question';

export const getAllRecentQuestions = async () => {
    const response = await Axios.get<Question[]>(`/questions`);
    return response.data.map((q) => {
        q.creationDate = new Date(q.creationDate);
        return q;
    });
}

export const getAllQuestionsByUserId = async (id: number) => {
    const response = await Axios.get<Question[]>(`/questions/${id}`);
    return response.data.map((q) => {
        q.creationDate = new Date(q.creationDate);
        return q;
    });
}

export const getAllUnconfirmedQuestions = async () => {
    const response = await Axios.get<Question[]>(`/questions/unconfirmed`);
    return response.data.map((q) => {
        q.creationDate = new Date(q.creationDate);
        return q;
    });
}

export const getQuestionByQuestionId = async (id: number) => {
    const response = await Axios.get<Question>(`/question?questionId=1`);
    response.data.creationDate = new Date(response.data.creationDate);
    return response.data;
}

export const postQuestion = async (question: Question) => {
    const response = await Axios.post<Question>(`/question`, question);
    response.data.creationDate = new Date(response.data.creationDate);
    return response.data;
}

export const updateStatus = async (question: Question) => {
    const response = await Axios.post<Question>(`/question`, question);
    response.data.creationDate = new Date(response.data.creationDate);
    return response.data;
}