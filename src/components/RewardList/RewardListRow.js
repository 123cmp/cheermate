import {Card, Button, Row, Col} from "react-bootstrap";
import React from "react";

import styles from './RewardList.module.css'

export default function RewardListRow({cardModels, index, size = 4}) {
    const columns = [];

    const getCard = (model, i) => model
        ? <Col key={`reward-col-${index}-${i}`}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="https://i.imgur.com/1lgPDw1.jpeg"/>
                <Card.Body>
                    <Card.Title>Lamborghini Aventador</Card.Title>
                    <Card.Text>
                        $500 000
                    </Card.Text>
                    <Button variant="outline-success" color="success">Choose</Button>
                </Card.Body>
            </Card>
        </Col>
        : <Col key={`reward-col-${index}-${i}`}/>;

    for (let i = 0; i < size; i++) {
        columns.push(getCard(cardModels[i], i))
    }

    return (
        <Row className={styles.listRow} key={`reward-row-${index}`}>
            { columns }
        </Row>
    )
}