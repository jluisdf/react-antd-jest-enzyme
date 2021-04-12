import React from 'react';
import { shallow, mount } from "enzyme";
import BasicForm from './BasicForm';
import { sleep } from '../utils';
import { act } from 'react-dom/test-utils';

describe('<BasicForm />', () => {

    async function change(wrapper, tag, index, value) {
        wrapper.find(tag).at(index).simulate('change', { target: { value } });
        await sleep();
        wrapper.update();
    }

    function toggleOpen(wrapper) {
        act(() => {
            wrapper.find('.ant-select-selector').simulate('mousedown');
            jest.runAllTimers();
            wrapper.update();
        });
    }

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('Validar formulario', async () => {

        const onGenderChange = jest.fn();
        const onFinish = jest.fn();
        const onReset = jest.fn();
        const onFill = jest.fn();

        const wrapper = mount(
            <BasicForm
                onGenderChange={onGenderChange}
                onFinish={onFinish}
                onReset={onReset}
                onFill={onFill}
            />
        );

        await change(wrapper, 'Input' , 0, 'Hola mundo');
        // await change(wrapper, 'Input' , 1, 'male');
        // await change(wrapper, 'Input' , 1, 'prueba');
        toggleOpen(wrapper);
        // console.log(wrapper.find('.ant-select-item-option').length);
        wrapper.find('.ant-select-item-option').at(0).simulate('click')
        wrapper.find('form').simulate('submit');
        await sleep();

        // wrapper.update()
        // console.log(wrapper.debug());
        // console.log(wrapper.find('Button').length);
        // console.log(onFinish.mock.calls);
        // console.log(onFinishFailed.mock.calls);

        expect(onFinish).toHaveBeenCalled();
        // expect(onFinishFailed).not.toHaveBeenCalled();
        // wrapper.unmount();


    })

})
