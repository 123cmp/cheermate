import { Col, Row } from "react-bootstrap";
import React from "react";

import styles from './ScoreSection.module.css';

export default function ScoreSection() {
    return (
        <Row>
            <Col className={styles.tipsCol}>
                <label className={styles.tipsLabel}>
                    Tips received
                </label>
                <div className={styles.tipsReceived}>5</div>
            </Col>
            <Col className={styles.tipsCol}>
                <label className={styles.tipsLabel}>
                    Tips to be sent
                </label>
                <div className={styles.tipsToBeSent}>1</div>
            </Col>
        </Row>
    )
}