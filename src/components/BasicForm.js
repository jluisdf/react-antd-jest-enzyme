import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const BasicForm = props => {

    const { onGenderChange, onFinish, onReset, onFill } = props
    const [ form ] = Form.useForm();

    return (
        <Form  form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="note"
                label="Note"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                    <Form.Item
                        name="customizeGender"
                        label="Customize Gender"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                ) : null
            }
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
                Fill form
            </Button>
        </Form.Item>
    </Form>
);
};

export default BasicForm
