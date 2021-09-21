import {Form, Button, Col, Row} from "react-bootstrap";
import React, {useState} from "react";

import styles from "./RegistrationForm.module.css";
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput";

export default function RegistrationForm({onSubmit}) {
    const [model, setModel] = useState({
        name: '',
        lastName: '',
        email: '',
        image: null,
        description: '',
        password: '',
        confirmPassword: '',
    });

    const handleFieldChange = (name, value) => {
        const updatedModel = {...model, [name]: value};
        setModel(updatedModel);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit && onSubmit(model);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <Row>
                <Col md>
                    <Form.Group className="mb-3" controlId="UserName">
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={model.name}
                            onChange={(e) => handleFieldChange('name', e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="UserSurName">
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            value={model.lastName}
                            onChange={(e) => handleFieldChange('lastName', e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={model.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Row>
                    <Col>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={model.password}
                            onChange={(e) => handleFieldChange('password', e.target.value)}
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Row>
                    <Col>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={model.confirmPassword}
                            onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Something about yourself"
                            value={model.description}
                            onChange={(e) => handleFieldChange('description', e.target.value)}
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
                <Row>
                    <Col>
                        <ImageUploadInput
                            onChange={(file) => handleFieldChange('image', file)}
                        />
                    </Col>
                </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}
