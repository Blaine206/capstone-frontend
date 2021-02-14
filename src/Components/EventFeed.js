import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Event from './Event';

const EventFeed = (props) => {

    const [feed, setFeed] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/events`)
            .then(res => {
                const events = res.data;
                setFeed(events);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.baseUrl]);


    return (
        <div>
            <ul>
                {feed.map(event => <li>{event.title}</li>)}
            </ul>
        </div>
    )
}

export default EventFeed;