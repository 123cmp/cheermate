import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Container, Col, Form, Row, Button} from "react-bootstrap";

import styles from "./TipsPopup.module.css";

export default function TipsPopup({trigger, username, onConfirm}) {
    const [ comment, setComment ] = useState('');

    const handleConfirm = (close) => {
        onConfirm && onConfirm(comment);
        clearAndClose(close)
    };

    const clearAndClose = (close) => {
        setComment('');
        close();
    };


    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return <Popup trigger={trigger} modal nested>
        {close => (
            <Container>
                <h1>Do you want to tip {username}?</h1>
                <Row>
                    <Col>
                        <Form.Control value={comment} onChange={handleCommentChange} as="textarea" rows={3} className={styles.commentArea}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => handleConfirm(close)} className={styles.tipButton} variant="outline-primary">Tip</Button>
                        <Button onClick={() => clearAndClose(close)} className={styles.tipButton} variant="outline-secondary">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        )}
    </Popup>
}