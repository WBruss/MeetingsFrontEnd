import React, { useContext } from 'react';

// AntD imports
import { Table } from 'antd';
import { AppContext } from '../../../App';

const MeetingsTable = () => {

    const [ appData, setAppData ] = useContext(AppContext);

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
            dataIndex: 'room_id',
            key: 'venue',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ]

    return (
        <Table dataSource={appData.meetingData} columns={columns} rowKey={meetingData => meetingData.id }></Table>
    )
}

export default MeetingsTable;