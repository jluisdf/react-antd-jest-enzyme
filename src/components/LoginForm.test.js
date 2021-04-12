import React from 'react';
import { shallow, mount } from "enzyme";
import LoginForm from './LoginForm';
import { sleep } from '../utils';

describe('<LoginForm />', () => {

    async function change(wrapper, tag, index, value) {
        wrapper.find(tag).at(index).simulate('change', { target: { value } });
        await sleep();
        wrapper.update();
    }

    it('prueba uno', async () => {

        // const onFinish = jest.fn().mockImplementation(() => {});
        const onFinish = jest.fn();
        const onFinishFailed = jest.fn();

        const wrapper = mount(
            <LoginForm
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            />
        );

        await change(wrapper, 'Input' , 0, 'prueba@gmail.com');
        await change(wrapper, 'Input' , 1, 'prueba');
        wrapper.find('form').simulate('submit');
        await sleep();
        // wrapper.update()
        // console.log(wrapper.debug());
        // console.log(wrapper.find('Button').length);
        // console.log(onFinish.mock.calls);
        // console.log(onFinishFailed.mock.calls);
        expect(onFinish).toHaveBeenCalled();
        expect(onFinishFailed).not.toHaveBeenCalled();
        wrapper.unmount();
    })
})
