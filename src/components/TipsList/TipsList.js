import { ToastContainer, Toast, Row } from "react-bootstrap";
import React from "react";

import sharedStyles from './../../shared.module.css';
import styles from './TipsList.module.css';

export default function TipsList({caption}) {
    return (
        <Row className={sharedStyles.userInfoRow}>
            <h1 className={styles.tipCaption}>{caption}</h1>
            <div className={styles.tipContainer}>
                <div className={styles.tip}>
                    <Toast.Header>
                        <strong className="me-auto">Tip</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                </div>
                <div className={styles.tip}>
                    <Toast.Header>
                        <strong className="me-auto">Tip</strong>
                        <small className="text-muted">2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </div>
            </div>
        </Row>
    )
}