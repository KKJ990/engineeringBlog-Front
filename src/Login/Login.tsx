import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "../App.css"
import axios from "axios";

const onFinish = (values: any) => {
    axios.post('Login.do',{
        userid: values.userId,
        password: values.password
    }).then((res)=>{
        console.log(res)
    }).catch((error) => {
        console.error('요청 실패:', error); // 오류 처리
    });

};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    userId?: string;
    password?: string;
    remember?: string;
};

const App: React.FC = () => (
    <div className="Login">
        <div>
            <h1>EngineeringBlog</h1>
        </div>

        <div className="LoginForm">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="ID"
                    name="userId"
                    rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>로그인정보 저장</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        로그인
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
);

export default App;