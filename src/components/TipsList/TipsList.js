import { ToastContainer, Toast, Row } from "react-bootstrap";
import React from "react";

import sharedStyles from './../../shared.module.css';
import styles from './TipsList.module.css';
import Tip from "./Tip";

export default function TipsList({caption, model}) {
    return (
        <Row className={sharedStyles.userInfoRow}>
            <h1 className={styles.tipCaption}>{caption}</h1>
            <div className={styles.tipContainer}>
                {model.map(
                    tip => <Tip model={tip}/>
                )}
            </div>
        </Row>
    )
}