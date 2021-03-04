import { useEffect, useState, useContext, createContext, useReducer } from 'react';

// Component Imports
import RoomsForm from './rooms_form';

// Antd imports
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

// Import Context
import {RoomDataContext} from './room_context';
import {AppContext} from '../../../App';

function RoomsTable(){

    // const [roomData, setRoomData] = useContext(RoomDataContext);
    const [appData, setAppData] = useContext(AppContext);
    

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
        {
            title: "",
            dataIndex: "operation",
            render: (_, record) => {
                return (
                     <a onClick={() => handleOnDelete(record.id)} >X</a>
                );
            }
        }
    ]

    // Delete Room
    const handleOnDelete = async (id) => {
        console.log("Delete Id ", id)
        let response = await axios.delete("http://localhost:9009/rooms/?id="+ id);
        console.log(response.data)
        
        if(response.status == 200){
            // setRoomData(roomData.filter(room => room.id !== response.data.id));
            setAppData({
                ...appData,
                roomData : appData.roomData.filter(room => room.id !== response.data.id)
            })
        }
    }
    
    return(
        <>
            <Table dataSource={appData.roomData} columns={columns} rowKey={roomData=>roomData.id}/>
        </>
    )
}



function RoomsPage() {

    

    return(
        // <RoomDataContext.Provider value={[appData, setAppData]}>
        <>
            <h1>Rooms Page</h1>
            <RoomsForm/>
            <RoomsTable/>
        </>
        //</RoomDataContext.Provider>
    )
}

export default RoomsPage;