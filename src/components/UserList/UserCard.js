import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

import styles from './UserCard.module.css'

function UserCard({ model }) {
    return (
        <Card>
            <Card.Img variant="top" src={model.imageUrl}/>
            <Card.Body>
                <Card.Title>{model.name} {model.lastName}</Card.Title>
                <Card.Text>
                    {model.description}
                </Card.Text>
                <Button variant="outline-success" color="success">Tip</Button>
            </Card.Body>
        </Card>
    )
}

export default React.memo(UserCard);