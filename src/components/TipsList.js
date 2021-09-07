import {ToastContainer, Toast, Row} from "react-bootstrap";
import React from "react";

const styles = {
    tipCaption: {
        margin: '2rem 0'
    },
    tipContainer: {
        width: '100%'
    },
    tip: {
        width: '100%'
    }
}

export default function TipsList({caption}) {
    return (
        <Row style={styles.userInfoRow}>
            <h1 style={styles.tipCaption}>{caption}</h1>
            <ToastContainer style={styles.tipContainer}>
                <Toast style={styles.tip}>
                    <Toast.Header>
                        <strong className="me-auto">Tip</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast style={styles.tip}>
                    <Toast.Header>
                        <strong className="me-auto">Tip</strong>
                        <small className="text-muted">2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </Toast>
            </ToastContainer>
        </Row>
    )
}