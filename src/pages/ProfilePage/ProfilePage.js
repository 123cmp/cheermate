import React from 'react'
import { Container } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import TipsList from "../../components/TipsList/TipsList";
import {useSelector} from "react-redux";
import {getUserById} from "../../store/selectors";

export default function ProfilePage() {
    const currentUser = useSelector((state) => getUserById(state, "123"));

    return (
        <Container>
            <UserInfo model={currentUser} />
            <ScoreSection model={currentUser} />
            <TipsList caption={'Tips Received'}/>
            <TipsList caption={'Tips sent'}/>
        </Container>
    )
}