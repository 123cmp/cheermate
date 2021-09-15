import { Col, Row } from "react-bootstrap";
import React from "react";

import styles from './ScoreSection.module.css';

export default function ScoreSection({model}) {
    return (
        <Row>
            <Col className={styles.tipsCol}>
                <label className={styles.tipsLabel}>
                    Tips received
                </label>
                <div className={styles.tipsReceived}>{model.tipsToBeSpent}</div>
            </Col>
            <Col className={styles.tipsCol}>
                <label className={styles.tipsLabel}>
                    Tips to be sent
                </label>
                <div className={styles.tipsToBeSent}>{model.tipsToBeSent}</div>
            </Col>
        </Row>
    )
}