import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import Navigation from './Nav'
import { Card , Button } from 'react-bootstrap'; 
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

// feed = array of event objects

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>
                    {card.title}
                </Card.Title>
                <Card.Text>
                    <ul>
                        <li>{card.creator}</li>
                        <li>{card.location}</li>
                    </ul>
                </Card.Text>
                <Button variant="primary">Interested</Button>
            </Card.Body>
            </Card>
        )
    };

    return (
        <div> 
            <Navigation />
            <div className="grid">
                {feed.map(event => renderCard(event))}
            </div>
            {EventFeed}
        </div>
    )
}

export default EventFeed;

// <ul>
//     {feed.map(event => <Card body><li>{event.title}</li></Card>)}
// </ul>