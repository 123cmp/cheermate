import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

import styles from './UserCard.module.css'
import TipsPopup from "../TipsPopup/TipsPopup";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../store/selectors";
import {tipUser} from "../../store/actions";

function UserCard({ model }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser);

    const handleTipConfirm = (comment) => {
        dispatch(
            tipUser({
                receiverId: model._id,
                senderId: currentUser._id,
                description: comment
            })
        )
    }
    return (
        <Card>
            <Card.Img variant="top" src={model.imageUrl}/>
            <Card.Body>
                <Card.Title>{model.name} {model.lastName}</Card.Title>
                <Card.Text>
                    {model.description}
                </Card.Text>
                <TipsPopup username={model.name} onConfirm={handleTipConfirm} trigger={
                    <Button variant="outline-success" color="success">Tip</Button>
                }/>
            </Card.Body>
        </Card>
    )
}

export default React.memo(UserCard);