import { React, useState} from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

function MeetingsForm() {

    const [form] = Form.useForm();

    const handleOnFinish = (values) => {
        console.log('Success:', values);
        form.resetFields();
    }
    
    return(
        <>
            <Form name="meetings_form" form={form} onFinish={handleOnFinish}>
                <Row>
                    <Col span={24/3}>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                {required: true, message: 'Please enter Meeting Title'}
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={24/3}>
                        <Form.Item
                            label="Time"
                            name="time"
                            rules={[
                                {required: true, message: 'Please enter Meeting Time'}
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={24/3}>
                        <Form.Item
                            label="Duration"
                            name="duration"
                            rules={[
                                {required: true, message: 'Please enter Meeting Duration'}
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="Venue"
                            name="venue"
                            rules={[
                                {required: true, message: 'Please select Meeting Venue'}
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={24-8}>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {required: true, message: 'Please enter Meeting Description'}
                            ]}
                        >
                            <Input.TextArea/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
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

export default MeetingsForm;