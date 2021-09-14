import React from 'react'
import {Container, Form} from "react-bootstrap";
import RewardList from "../../RewardList/RewardList";

export default function RewardsPage() {
    const count = 1;

    return (
        <Container>
            <h1>You have {count} scores, choose your reward</h1>
            <Form>
                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Type product name" />
                </Form.Group>
            </Form>
            <RewardList />
        </Container>
    )
}