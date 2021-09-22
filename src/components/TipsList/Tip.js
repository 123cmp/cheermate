import {Toast} from "react-bootstrap";
import React from "react";
import styles from './Tip.module.css';

export default function TipsList({model}) {
    return (
        <div className={styles.tip}>
            <Toast.Header>
                <strong className="me-auto">Tip</strong>
                <small className="text-muted">just now </small>
            </Toast.Header>
            <Toast.Body>{model.description}</Toast.Body>
        </div>
    )
}