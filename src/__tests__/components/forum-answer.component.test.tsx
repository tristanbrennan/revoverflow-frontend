import React from 'react';
import { ForumAnswerComponent, ForumAnswerComponentProps } from '../../components/pages/forum-components/forum-answer.component';
import { mount } from 'enzyme';


describe('feed-container.component', () => {

    test('should render', () => {
        const props: ForumAnswerComponentProps = {
            answer: {
                id: 99,
                content: "content99",
                creationDate: new Date("2020-01-01"),
                questionId: 99,
                userId: 99
            } ,
            selected: false,
            acceptAnswer: () => { },
            clickQuestion: () => { },
            setSelected: () => { },
            storeQuestion: {},
            accepted: false
        }
        const wrapper = mount(<ForumAnswerComponent {...props} />);
        expect(wrapper).toBeDefined();
    })
});