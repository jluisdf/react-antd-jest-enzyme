import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import LoginForm from './components/LoginForm';
import BasicForm from './components/BasicForm';
import BasicFormHook from './hooks/BasicFormHook';

const App = () => {

    // Login Form Functions:
    // const onFinish = values => { console.log("desde onFinish", values)}
    // const onFinishFailed = () => { console.log("desde onFinishFailed") }

    const [ onGenderChange, onFinish, onReset, onFill ] = BasicFormHook()

    return (
        <Row style={{marginTop: '2rem'}}>
            <Col span={16} offset={4}>
                <h1 style={{textAlign: 'center'}}>Componentes Ant Design</h1>
                <br />
                {/* <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} /> */}
                <BasicForm
                    onGenderChange={onGenderChange}
                    onFinish={onFinish}
                    onReset={onReset}
                    onFill={onFill}
                />
            </Col>
        </Row>
    );
}

export default App;
