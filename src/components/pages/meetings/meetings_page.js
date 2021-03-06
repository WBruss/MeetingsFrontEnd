import { useContext, useState } from 'react';

import MeetingsForm from './meeting_form';
import MeetingsTable from './meetings_table';

// Import AppContext
import { AppContext } from '../../../App';

function MeetingsPage() {
    let meetingRooms = ["Venue","Block E Boardroom", "Sales Boardroom", "Block A boardroom"]

    const [ appData, setAppData ] = useContext(AppContext);

    let meetingData = {
        title: '',
        time: '',
        venue: '',
        description: ''
    }

    const [ meetingStateData, setMeetingStateData ] = useState({});

    let handleOnChange = (event) => {
        console.log( event.target.name,': ',event.target.value)
        let key = event.target.name;
        let value = event.target.value;
        meetingData[key] = value
    } 

    let handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("Submited");
        setMeetingStateData(meetingStateData);
        console.log(meetingData);
    }

    return(
        
         <>
            <h1>Meetings Page</h1>
            <MeetingsForm/>
            <MeetingsTable/>
            {/* <form>
                <label>
                    Title
                    <input name="title" type="text" onChange={handleOnChange}/>
                </label>
                <label>
                    Time
                    <input name="time" type="text" onChange={handleOnChange}/>
                </label>
                <label>
                    Venue
                    <select name="venue" onChange={handleOnChange}>
                        { 
                            meetingRooms.map(venue => {
                                return (
                                    <option key={venue} value={venue}>{venue}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label>
                    Description
                    <input name="description" type="text" onChange={handleOnChange}/>
                </label>
                <input type="submit" value="Submit" onClick={handleOnSubmit}/>
            </form> */}

        </>
    )
}

export default MeetingsPage;