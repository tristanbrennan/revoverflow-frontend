import React from 'react';
import { ForumContainerComponent, ForumContainerComponentProps } from '../../components/pages/forum-components/forum-container.component';
import { mount } from 'enzyme';


describe('feed-container.component', () => {

    test('should render', () => {
        const props: ForumContainerComponentProps = {
            storeQuestion: {},
            storeAnswer: {},
            storeAnswers: []
        }
        const wrapper = mount(<ForumContainerComponent {...props} />);
        expect(wrapper).toBeDefined();
    })
});
