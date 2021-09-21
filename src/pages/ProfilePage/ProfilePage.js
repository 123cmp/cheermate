import React from 'react'
import { Container } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import TipsList from "../../components/TipsList/TipsList";
import {useSelector} from "react-redux";
import {getCurrentUser, getUserById, getUsersFetching, getUsersIsFetched} from "../../store/selectors";
import DynamicContent from "../../components/DinamicContent/DynamicContent";

export default function ProfilePage() {
    const currentUser = useSelector(getCurrentUser);
    const isUsersFetching = useSelector(getUsersFetching);

    return (
        <Container>
            <DynamicContent isLoading={isUsersFetching}>
                <UserInfo model={currentUser} />
                <ScoreSection model={currentUser} />
                <TipsList caption={'Tips Received'}/>
                <TipsList caption={'Tips sent'}/>
            </DynamicContent>
        </Container>
    )
}