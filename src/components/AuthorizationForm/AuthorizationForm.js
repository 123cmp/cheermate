import {Form, Button} from "react-bootstrap";
import React, {useState} from "react";

import styles from "./AuthorizationForm.module.css";

export default function AuthorizationForm({onSubmit}) {
    const [model, setModel] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleFieldChange = (name, value) => {
        const updatedModel = { ...model, [name]: value};
        setModel(updatedModel);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit && onSubmit(model);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={model.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={model.password}
                    onChange={(e) => handleFieldChange('password', e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    className={styles.rememberMeControl}
                    type="checkbox"
                    label="Remember me"
                    checked={model.rememberMe}
                    onChange={(e) => handleFieldChange('rememberMe', e.target.checked)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}
