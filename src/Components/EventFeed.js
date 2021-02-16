import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Nav from './Nav'
// import EventDetails from './EventDetails';

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
            <Nav name={props.name} email={props.email} url={props.url}/>
            <ul>
                {feed.map(event => <Link><li>{event.title}</li></Link>)}
            </ul>
        </div>
    )
}

export default EventFeed;