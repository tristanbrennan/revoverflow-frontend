import React from 'react'
import {mount} from 'enzyme';
import Jest from 'jest'
import { AddFAQComponent } from '../../components/faq-components/add.faq.component';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { Card, IconButton } from '@material-ui/core';
import { FeedBoxComponent } from '../../components/pages/feed-components/feed-box.component';
import { RichTextEditorComponent } from '../../components/pages/forum-components/rich-text-editor-component/draftjs';


describe('add.faq.component', () =>{
    let q1:Question = {
        id: 1,
        acceptedId: 1,
        title: 'test question 1',
        content: 'this is a question',
        creationDate: new Date(),
        status: true,
        userID: 1
    }
    let q2:Question = {
        id: 2,
        acceptedId: 2,
        title: 'test question 2',
        content: 'what a great fantanstic question this is',
        creationDate: new Date(),
        status: true,
        userID: 1
    }
    let answerlessQuestion:Question = {
        id: 3,
        acceptedId: -1,
        title: 'answerless question',
        content: 'no one want to answer me :( ',
        creationDate: new Date(),
        status: false,
        userID: 2
    }
    let a1:Answer = {
        id: 1,
        content: 'Test Question 1 answer',
        creationDate: new Date(),
        questionId: 1,
        userId: 3,
    }
    let a2:Answer = {
        id: 6,
        content: 'Test Question 2 answer',
        creationDate: new Date(),
        questionId: 2,
        userId: 3,
    }


    it('should render', () => {
        
        const wrapper = mount(<AddFAQComponent/>);
        expect(wrapper).toBeDefined();
    })

    it('should redirect back to FAQs when submit is clicked' ,()=>{
        //declare some questions and answers

        //render the base component for testing
        const wrapper = mount(<AddFAQComponent/>);

        //update the form data
        const questionInput = wrapper.find('#questionInput')
        questionInput.simulate('change', { target: { value: q1.content } })
        const answerInput = wrapper.find('#questionInput')
        answerInput.simulate('change', { target: { value: a1.content } })
        //do submit event
        wrapper.find('#submitFAQButton').simulate('click')

        //check if were redirected after the submission
        expect(wrapper).not.toBeDefined()

    })
    
    it('should call submitFAQ with values of q2', ()=>{
        const wrapper = mount(<AddFAQComponent/>);
        const submitSpy = jest.spyOn(AddFAQComponent.prototype, 'submitFAQ');

        const questionInput = wrapper.find('#questionInput')
        questionInput.simulate('change', { target: { value: q2.content } })
        const answerInput = wrapper.find('#questionInput')
        answerInput.simulate('change', { target: { value: a2.content } })
        //do submit event
        wrapper.find('#submitFAQButton').simulate('click')
        
        //see if the function was called
        expect(submitSpy).toBeCalledWith(q2.content, a2.content)

    })


    it('should not allow submission without an answer' ,()=>{
        const wrapper = mount(<AddFAQComponent/>);
        
        const questionInput = wrapper.find('#questionInput')
        questionInput.simulate('change', { target: { value: answerlessQuestion.content } })
        //do submit event
        wrapper.find('#submitFAQButton').simulate('click')
        
        //we stayed on this page because the submit did not go through
        expect(wrapper).toBeDefined()

    })




})