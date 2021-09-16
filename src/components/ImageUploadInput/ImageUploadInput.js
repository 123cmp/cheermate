import {Form, Button, Col, Row} from "react-bootstrap";
import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUpload} from '@fortawesome/free-solid-svg-icons'

import styles from "./ImageUploadInput.module.css";

export default function ImageUploadInput({onChange}) {
    const [ file, setFile ] = useState(null);
    const handleChange = (e) => {
        const file = e.target.files[0];
        file && setFile(file);
        onChange && onChange(file);
    }

    return (
        <label className={styles.label}>
            <div className={styles.fileInputInterface}>
                {
                    file
                        ? <span className={styles.fileName}>{file.name}</span>
                        : <span className={styles.placeholder}>Select image</span>
                }
                <div className={styles.browseButton}>Browse</div>
            </div>
            <input
                className={styles.input}
                onChange={handleChange}
                type="file"
                accept=".jpg, .jpeg, .png"
            />
        </label>
    );
}
