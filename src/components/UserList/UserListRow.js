import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

import styles from './UserList.module.css'

export default function UserListRow({ cardModels, index, size = 4 }) {
    const columns = [];

    const getCard = (model, i) => model
        ? <Col key={`user-col-${index}-${i}`}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="https://i.imgur.com/C5ZpUTu.jpeg"/>
                <Card.Body>
                    <Card.Title>Username</Card.Title>
                    <Card.Text>
                        Role etc
                    </Card.Text>
                    <Button variant="outline-success" color="success">Tip</Button>
                </Card.Body>
            </Card>
        </Col>
        : <Col key={`user-col-${index}-${i}`}/>;

    for (let i = 0; i < size; i++) {
        columns.push(getCard(cardModels[i]))
    }

    return (
        <Row className={styles.listRow} key={`user-row-${index}`}>
            { columns }
        </Row>
    )
}