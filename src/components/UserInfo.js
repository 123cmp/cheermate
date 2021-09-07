import {Col, Image, Row} from "react-bootstrap";
import React from "react";

const styles = {
    userInfoRow: {
        margin: '3rem 0'
    },
    userNameCol: {
        textAlign: 'left'
    }
}

export default function UserInfo() {
    return (
        <Row style={styles.userInfoRow}>
            <Col>
                <Image src="https://i.imgur.com/C5ZpUTu.jpeg" rounded/>
            </Col>
            <Col style={styles.userNameCol}>
                <h1>Firstname Lastname</h1>
                <p>Description, role etc</p>
            </Col>
        </Row>
    )
}