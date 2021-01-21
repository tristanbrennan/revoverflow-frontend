import React, { useState, FC } from 'react';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';


export interface AdminFAQComponentProps{
    questions: Question[]
    answers: Answer[]
}

export const AdminFAQComponent: React.FC<AdminFAQComponentProps> = (props) => {
    return(<></>);
}
