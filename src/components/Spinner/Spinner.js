import {createPortal} from "react-dom";

import styles from './Spinner.module.css';
import React from "react";

export default function Spinner() {
    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.loader}>Loading...</div>
        </div>,
        document.body
    )
}