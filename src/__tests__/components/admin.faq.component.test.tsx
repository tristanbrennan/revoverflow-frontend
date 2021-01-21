import React from 'react'
import {mount} from 'enzyme';
import { AdminFAQComponent } from '../../components/faq-components/admin.faq.compent';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { Card } from '@material-ui/core';
import { FeedBoxComponent } from '../../components/pages/feed-components/feed-box.component';


fdescribe('admin.faq.component', () =>{
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

        //find allquestion
        const questionElement = wrapper.find("#faq").find(FeedBoxComponent)
        expect(questionElement).toBeTruthy()

    })

    it('should open a page to input a question when the add icon is pressed' ,()=>{
        

    })
    
    it('should not display questions without answers' ,()=>{


    })

    // it('should render the logout menu when the profile icon is clicked', () => {
    //     //render the base component for testing
    //     const wrapper = mount(<AdminFAQComponent  />);
    //     //find a node
    //     const iconButton = wrapper.find("#profile-icon-button").find(IconButton)
    //     //simulate event
    //     iconButton.simulate('click')
    //     //update all refs because we triggered a render
    //     wrapper.update()
    //     //find where the change should have happened
    //     const logoutMenu = wrapper.find("#primary-search-account-menu").find(Menu)
    //     //test a value on the node
    //     expect(logoutMenu.prop('open')).toBeTruthy()
    //     expect(logoutMenu.prop('anchorEl')).toBeDefined()
    // })


})