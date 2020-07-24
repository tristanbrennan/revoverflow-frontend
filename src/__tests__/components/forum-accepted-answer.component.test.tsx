import React from 'react';
import { ForumAcceptedAnswerComponent, ForumAcceptedAnswerComponentProps } from '../../components/pages/forum-components/forum-accepted-answer.component';
import { mount } from 'enzyme';


describe('feed-container.component', () => {

    test('should render', () => {
        const props: ForumAcceptedAnswerComponentProps = {
            storeQuestion: {},
            storeAnswer: {},
            selected: false,
            answer: {
                id: 99,
                content: "content99",
                creationDate: new Date("2020-01-01"),
                questionId: 99,
                userId: 99
            }
        }
        const wrapper = mount(<ForumAcceptedAnswerComponent {...props} />);
        expect(wrapper).toBeDefined();
    })
});
