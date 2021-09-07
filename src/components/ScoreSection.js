import {Col, Image, Row} from "react-bootstrap";
import React from "react";

const styles = {
    tipsLabel: {
        margin: '0 0 1rem 0'
    },

    tipsCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    tipsReceived: {
        borderRadius: '100%',
        width: '5rem',
        height: '5rem',
        lineHeight: '5rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: 'lightgreen'
    },

    tipsToBeSent: {
        borderRadius: '100%',
        width: '5rem',
        height: '5rem',
        lineHeight: '5rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: '#ff5353'
    }
}

export default function ScoreSection() {
    return (
        <Row style={styles.userInfoRow}>
            <Col style={styles.tipsCol}>
                <label style={styles.tipsLabel}>
                    Tips received
                </label>
                <div style={styles.tipsReceived}>5</div>
            </Col>
            <Col style={styles.tipsCol}>
                <label style={styles.tipsLabel}>
                    Tips to be sent
                </label>
                <div style={styles.tipsToBeSent}>1</div>
            </Col>
        </Row>
    )
}