import { Container, Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

import RewardListRow from "./RewardListRow";

export default function RewardList() {
    const cards = [];

    // model will be there
    for (let i = 0; i < 10; i++) {
        cards.push(
            { id: i }
        )
    }

    const cardsTemplate = () => {
        const rows = [];
        for (let i = 0; i < cards.length; i+=4) {
            rows.push(
                <RewardListRow key={i} cardModels={cards.slice(i, i + 4)} index={i} />
            );
        }

        return rows;
    }

    return (
        <Container>
            { cardsTemplate() }
        </Container>
    );
}