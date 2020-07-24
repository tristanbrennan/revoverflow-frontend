import React from 'react';
import { FeedBoxComponent, FeedBoxComponentProps } from '../../components/pages/feed-components/feed-box.component';
import { mount } from 'enzyme';


describe('feed-box.component', () => {

    test('should render', () => {
        const props: FeedBoxComponentProps = {
            question: {},
            questionContent: "",
            view: "",
            clickQuestion: () => { }
        }
        const wrapper = mount(<FeedBoxComponent {...props} />);
        expect(wrapper).toBeDefined();
    })

});

    // test('should render feed boxes on click  ', () => {
    //     const props: FeedContainerComponentProps = {
    //         storeQuestions: [],
    //         storeTab: 0,
    //         storePage: 0,
    //         storePageCount: 0,
    //         clickTab: () => { }
    //     }
    //     const wrapper = mount(<FeedContainerComponent {...props} />)

    //     const header = wrapper.find('h2');
    //     expect(header.text()).toContain(''+props.clicks);
    // });