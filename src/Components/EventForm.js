import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap'; 

const EventForm = ({ onSubmit }) => {

    const [formData, updateFormData] = useState({
        title: "",
        date: "",
        location: "",
        creator: ""
    });

    const onFormFieldChange = (event) => {

    console.log(event)
    const fieldName = event.target.name;
    const newValue = event.target.value;
    console.log(fieldName)
    console.log(newValue)

    const newFormData = {
        ...formData
    };

    newFormData[fieldName] = newValue;
    updateFormData(newFormData);
    };

    const submitCheck = (event) => {
    event.preventDefault();

    // Print user data
    // console.log(formData);
    onSubmit(formData)

    // Clear the form
    updateFormData({
        title: "",
        date: "",
        location: "",
        creator: ""
    });
};
// Form tracks build-up and passes info on with onSubmit
        return (
        <Form onSubmit={submitCheck}>
            <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" value={formData.title} onChange={onFormFieldChange} placeholder="Title" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                <Form.Control name="date" value={formData.date} onChange={onFormFieldChange} type="Date" placeholder="Date" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control name="location" value={formData.location} onChange={onFormFieldChange} placeholder="Location" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Event
            </Button>
        </Form>
    )
};

export default EventForm;


