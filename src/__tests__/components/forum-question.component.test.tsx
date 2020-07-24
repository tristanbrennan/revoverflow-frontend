import React from 'react';
import { ForumQuestionComponent, ForumQuestionComponentProps } from '../../components/pages/forum-components/forum-question.component';
import { mount } from 'enzyme';


describe('feed-container.component', () => {

    test('should render', () => {
        const props: ForumQuestionComponentProps = {
            storeConfirm: {},
            clickQuestion: () => { },
            clickConfirm: () => { },
            storeQuestion: {},
            storeAnswer: {}
        }
        const wrapper = mount(<ForumQuestionComponent {...props} />);
        expect(wrapper).toBeDefined();
    })
});


