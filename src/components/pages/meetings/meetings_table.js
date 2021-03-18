import React, { useContext } from 'react';

// AntD imports
import { Table } from 'antd';
import { AppContext } from '../../../App';

const MeetingsTable = () => {

    const [ appData, setAppData ] = useContext(AppContext);

    console.log("Meetings Table \n");
    console.log(appData.roomData);
    
    const roomName = (id) => {
        let room = appData.roomData.filter(rm => rm.id == id)
        console.log("Id ", id, "Room ", room[0]);
        return room[0].name
    }

    appData.meetingData.map(meeting => {
        // meeting.room_id = roomName(meeting.room_id)
        // console.log("Room Rsp ",roomName(meeting.room_id))
        // console.log("Meeting ",meeting)
    })


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: 'Venue',
            dataIndex: 'venue',
            key: 'venue',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        }
    ]

    return (
        <>
            <Table dataSource={appData.meetingData} columns={columns} rowKey={meetingData => meetingData.id }></Table>
        </>
    )
}

export default MeetingsTable;