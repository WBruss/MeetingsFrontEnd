import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css'

import { AppContext } from '../../../App';

function LoginForm() {

  const [ appData, setAppData ] = useContext(AppContext);

    const layout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 18,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 1,
          span: 24,
        },
      };
      

    const onFinish = (values) => {
        console.log('Success:', values);
        setAppData(
          {
            ...appData,
            logInData : true
          }
        )
        console.log('Success:', appData);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
            <Form
                className="login_form"
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                      className="form_button"
                      type="primary" htmlType="submit"
                    >
                    Log In
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
    
}

export default LoginForm;