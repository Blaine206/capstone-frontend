import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
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

    const renderCard = (card) => {
        return (
            <Card style={{ width: '18rem' }} key={card.id} className="box">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>
                    {card.title}
                </Card.Title>
                <Card.Text>
                    <span className="card-row">{card.creator}</span>
                    <span className="card-row">{card.location}</span>      
                </Card.Text>
                <Button variant="primary">Interested</Button>
            </Card.Body>
            </Card>
        )
    };

    return (
        <div> 
            <div className="grid">
                {feed.map(event => renderCard(event))}
            </div>
        </div>
    );
};

export default EventFeed;

// <ul>
//     {feed.map(event => <Card body><li>{event.title}</li></Card>)}
// </ul>