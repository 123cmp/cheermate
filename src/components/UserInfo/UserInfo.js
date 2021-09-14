import { Col, Image, Row } from "react-bootstrap";
import React from "react";

import sharedStyles from './../../shared.module.css';
import styles from './UserInfo.module.css'

export default function UserInfo() {
    return (
        <Row className={sharedStyles.userInfoRow}>
            <Col>
                <Image src="https://i.imgur.com/C5ZpUTu.jpeg" rounded/>
            </Col>
            <Col className={styles.userNameCol}>
                <h1>Firstname Lastname</h1>
                <p>Description, role etc</p>
            </Col>
        </Row>
    )
}