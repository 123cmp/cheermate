import React from 'react'
import { Container } from "react-bootstrap";
import UserInfo from "../../UserInfo/UserInfo";
import ScoreSection from "../../ScoreSection/ScoreSection";
import TipsList from "../../TipsList/TipsList";

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