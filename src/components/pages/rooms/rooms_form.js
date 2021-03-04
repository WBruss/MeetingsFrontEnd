import { React, useState, useContext } from 'react';
import { Form, Row, Col, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

// Import Context
import {RoomDataContext} from './room_context';
import { AppContext } from '../../../App';

function RoomsForm() {

    // const [roomData, setRoomData] = useContext(RoomDataContext);
    const [ appData, setAppData ] = useContext(AppContext);

    const span = 24/4;
    const [form] = Form.useForm();

    const handleOnFinish = async (values) => {
        console.log(values)
        let response = await axios.post("http://localhost:9009/rooms", values)
        console.log("Response: ", response.data);
        console.log("Response: ", response.status);
        form.resetFields()

        if(response.status == 200){
            // setRoomData([...roomData , response.data]);
            setAppData({
                ...appData,
                roomData : [...appData.roomData, response.data]
            })
        }
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