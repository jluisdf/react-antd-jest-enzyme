import React from 'react'
import { Form } from 'antd';

const BasicFormHook = (props) => {

    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
            form.setFieldsValue({
                note: 'Hi, man!',
            });
            return;

            case 'female':
            form.setFieldsValue({
                note: 'Hi, lady!',
            });
            return;

            case 'other':
            form.setFieldsValue({
                note: 'Hi there!',
            });
        }
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    return [ onGenderChange, onFinish, onReset, onFill ]
}

export default BasicFormHook
