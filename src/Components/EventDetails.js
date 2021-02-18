import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import Nav from './Nav'
import { Card , Button } from 'react-bootstrap'; 
import EventFeed from './EventFeed'
import Navigation from './Nav';

const EventDetails = (props) => {

    const [details, setDetails] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/events/${props.id}`)
            .then(res => {
                const event = res.data;
                setDetails(event);
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
    }

    return (
        <div> 
            <Navigation />
        </div>
    )
}

export default EventFeed;
