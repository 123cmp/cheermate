import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

import styles from './UserList.module.css'
import UserCard from "./UserCard";

export default function UserListRow({ cardModels, index, size = 4 }) {
    const columns = [];

    const getCard = (model, i) => model
        ? <Col key={`user-col-${index}-${i}`}>
            <UserCard model={model} />
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