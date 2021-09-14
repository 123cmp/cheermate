import React from 'react'
import { Container, Form } from "react-bootstrap";
import UserList from "../../UserList/UserList";

export default function GivingPage() {
    const count = 1;
    return (
        <Container>
            <h1>You have {count} scores to give</h1>
            <Form>
                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Type name" />
                </Form.Group>
            </Form>
            <UserList />
        </Container>
    )
}