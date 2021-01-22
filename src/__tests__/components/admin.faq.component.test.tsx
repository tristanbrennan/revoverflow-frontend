import React from 'react'
import {mount} from 'enzyme';
import { AdminFAQComponent } from '../../components/faq-components/admin.faq.compent';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { Card, IconButton } from '@material-ui/core';
import { FeedBoxComponent } from '../../components/pages/feed-components/feed-box.component';
import { RichTextEditorComponent } from '../../components/pages/forum-components/rich-text-editor-component/draftjs';


describe('admin.faq.component', () =>{
    let testQuestions:Question[]
    let testAnswers:Answer[]
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


    beforeEach(() => {
        testAnswers = []
        testQuestions = []
      });


    it('should render', () => {
        
        const wrapper = mount(<AdminFAQComponent questions={testQuestions} answers={testAnswers} />);
        expect(wrapper).toBeDefined();
    })

    it('should show frequently asked questions and answers' ,()=>{
        //declare some questions and answers
        testQuestions.push(
            q1,q2
        )
        testAnswers.push(
            a1,a2
        )
        //render the base component for testing
        const wrapper = mount(<AdminFAQComponent questions={testQuestions} answers={testAnswers} />);

        //find allquestions
        const questionElement = wrapper.find("#faq").find(FeedBoxComponent)
        //check if they exist
        expect(questionElement).toBeTruthy()

    })

    it('should open a page to input a question when the add icon is pressed' ,()=>{
        //declare some questions and answers
        testQuestions.push(
            q1,q2
        )
        testAnswers.push(
            a1,a2
        )
        //render the base component for testing
        const wrapper = mount(<AdminFAQComponent questions={testQuestions} answers={testAnswers} />);

        //find the button
        const iconButton = wrapper.find("#add-faq-button").find(IconButton)
        //simulate event
        iconButton.simulate('click')
        //update all refs because we triggered a render
        wrapper.update()
        //find where the change should have happened
        // const additionBox = wrapper.find("#faq-addition-box")
        //test a value on the node
        expect(wrapper.find(RichTextEditorComponent).prop('storeQuestions')).toBeDefined()
        

    })
    
    it('should not display questions without answers' ,()=>{
        //declare some questions and answers
        testQuestions.push(
            q1,answerlessQuestion
        )
        testAnswers.push(
            a1
        )

        //render the base component for testing
        const wrapper = mount(<AdminFAQComponent questions={testQuestions} answers={testAnswers} />);
        
        //find allquestions
        const questionElement = wrapper.find("#faq").find(FeedBoxComponent)
        //check if only the question with an answer is on the screen
        expect(questionElement.length).toBe(1)


    })



})