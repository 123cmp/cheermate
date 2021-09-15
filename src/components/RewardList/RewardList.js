import {Container, Card, Button, Row, Col} from "react-bootstrap";
import React from "react";

import RewardListRow from "./RewardListRow";

export default function RewardList({model}) {
    const cardsTemplate = () => {
        const rows = [];
        for (let i = 0; i < model.length; i += 4) {
            rows.push(
                <RewardListRow key={i} cardModels={model.slice(i, i + 4)} index={i}/>
            );
        }

        return rows;
    }

    return (
        <Container>
            {cardsTemplate()}
        </Container>
    );
}