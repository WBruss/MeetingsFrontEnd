import { useEffect, useState } from 'react';
// Component Imports
import RoomsForm from '../utilities/rooms_form';

// Antd imports
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

function RoomsTable(){

    const [roomData, setRoomData] = useState([]);

    const dataSource = [
        {
            id: 1,
            name: "Sales Boardroom",
            block: "Block A",
            capacity: 1
            },
            {
            id: 2,
            name: "Software Boardroom",
            block: "Block E",
            capacity: 15
            }
    ]
    
    const columns = [
        {
            title: "Name",
            dataIndex: 'name',
            key: "name"
        },
        {
            title: "Block",
            dataIndex: 'block',
            key: "block"
        },
        {
            title: "Capacity",
            dataIndex: 'capacity',
            key: "capacity"
        },
    ]



    useEffect(() => {
        getRooms();
    }, []);

    // Get Rooms Data
    async function getRooms() {
        let response = await axios.get("http://localhost:9009/rooms");
        console.log(response.data)
        setRoomData(response.data);
    }


    return(
        <Table dataSource={roomData} columns={columns} rowKey={roomData=>roomData.id}/>
    )
}



function RoomsPage() {

    return(
        <>
            <h1>Rooms Page</h1>
            <RoomsForm/>
            <RoomsTable/>
        </>
    )
}

export default RoomsPage;