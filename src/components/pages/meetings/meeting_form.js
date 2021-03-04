import { React, useState, useContext} from 'react';
import { Form, Row, Col, Input, InputNumber, Button, DatePicker, Select } from 'antd';
import axios from 'axios';

// Import Context
import { AppContext } from '../../../App';

function MeetingsForm() {

    const [appData, setAppData]  = useContext(AppContext);

    console.log("Meetings");
    console.log(appData);

    const [form] = Form.useForm();

    const { Option } = Select;

    const createMeeting = async (meetindDetails) => {
        const response = await axios.post("http://localhost:9009/meetings", meetindDetails);
        console.log(response.data);
        if(response.status == 200){
            setAppData({
                ...appData,
                meetingData: [...appData.meetingData, response.data]
            })
        }
    }

    const handleOnFinish = (values) => {
        console.log('Success:', values);
        let date = new Date(values.date._d).toLocaleDateString();
        let time = new Date(values.time._d).toLocaleTimeString('en-GB');
        let duration = new Date(values.duration._d).toLocaleTimeString('en-GB');

        // datetiem.
        console.log("Date: ",date);
        console.log("Time: ",time);
        console.log("Duration: ",duration);

        values.date = date;
        values.time = time;
        values.duration = duration;
        console.log('Values:', values);

        createMeeting(values);

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
                    <Col span={24/5}>
                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[
                                {required: true, message: 'Please enter Meeting Time'}
                            ]}
                        >
                            <DatePicker
                                format="YYYY-MM-DD"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24/5}>
                        <Form.Item
                            label="Time"
                            name="time"
                            rules={[
                                {required: true, message: 'Please enter Meeting Time'}
                            ]}
                        >
                            <DatePicker
                                picker="time"
                                format="HH:mm"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24/5}>
                        <Form.Item
                            label="Duration"
                            name="duration"
                            rules={[
                                {required: true, message: 'Please enter Meeting Duration'}
                            ]}
                        >
                            <DatePicker
                                picker="time"
                                type="time"
                                format="HH:mm"
                            />
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
                            <Select placeholder="Venue">
                                {
                                    appData.roomData.map(room => (
                                        <Option value={room.id} key={room.id}>
                                            { room.name }
                                        </Option>
                                    ))
                                }
                            </Select>
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