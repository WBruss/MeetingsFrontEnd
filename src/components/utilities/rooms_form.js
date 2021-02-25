import { React, useState, use} from 'react';
import { Form, Row, Col, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

function RoomsForm() {
    const span = 24/4;
    const [form] = Form.useForm();

    const handleOnFinish = async (values) => {
        console.log(values)
        let response = await axios.post("http://localhost:9009/rooms", values)
        console.log("Response: ", response.data);
        form.resetFields()
    }



    return(
        <>
            <Form form={form} name="rooms_form" onFinish={handleOnFinish}>
                <Row>
                    <Col span={span}>
                        <Form.Item
                            label="Name"
                            name="name"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={span}>
                        <Form.Item
                            label="Block"
                            name="block"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={span}>
                        <Form.Item
                            label="Capacity"
                            name="capacity"
                        >
                            <InputNumber/>
                        </Form.Item>
                    </Col>
                    <Col span={span}>
                        <Button 
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default RoomsForm;