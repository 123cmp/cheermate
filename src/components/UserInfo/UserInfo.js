import { Col, Image, Row } from "react-bootstrap";
import React from "react";

import sharedStyles from './../../shared.module.css';
import styles from './UserInfo.module.css'

export default function UserInfo({model}) {
    return (
        <Row className={sharedStyles.userInfoRow}>
            <Col>
                <Image src={model.imageUrl} rounded/>
            </Col>
            <Col className={styles.userNameCol}>
                <h1>{model.name} {model.surname}</h1>
                <p>{model.description}</p>
            </Col>
        </Row>
    )
}