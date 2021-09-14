import { Container, Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

import './UserList.module.css'
import { rightPad } from "../../utils";
import UserListRow from "./UserListRow";
import RewardListRow from "../RewardList/RewardListRow";

export default function UserList() {
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
                <UserListRow key={i} cardModels={cards.slice(i, i + 4)} index={i} />
            );
        }

        return rows;
    }

    return (
        <Container>
            { cardsTemplate() }
        </Container>)
}