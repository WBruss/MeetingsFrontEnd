import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../../App';

function DashboardPage() {

    const [ appData, setAppData ] = useContext(AppContext);

    useEffect(() => {
        getRooms();
        getMeetings();
    }, [])

    const getRooms = async () => {
        let response = await axios.get("http://localhost:9009/rooms");
        console.log("Dashboard\n", response.data);
        setAppData(
            prevState => {
                return ({
                    ...prevState,
                    roomData : response.data
                })
            }
        )
    }

    const getMeetings = async () => {
        let response = await axios.get("http://localhost:9009/meetings");
        console.log("Dashboard\n", response.data);
        setAppData(
            prevState => {
                return ({
                    ...prevState,
                    meetingData : response.data
                })
            }
        )
    }

    return(
        <>
            <h1>Dashboard Page</h1>
        </>
    )
}

export default DashboardPage;