import React from 'react'
import {Row, Container, Image, Col} from "react-bootstrap";
import UserInfo from "../UserInfo";
import ScoreSection from "../ScoreSection";
import TipsList from "../TipsList";

export default function ProfilePage() {
    return (
        <Container>
            <UserInfo />
            <ScoreSection />
            <TipsList caption={'Tips Received'}/>
            <TipsList caption={'Tips sent'}/>
        </Container>
    )
}