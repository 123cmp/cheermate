import React, {useEffect} from 'react'
import { Container } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import TipsList from "../../components/TipsList/TipsList";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllTips,
    getCurrentUser,
    getTipsFetched,
    getTipsFetching,
    getUsersFetching,
} from "../../store/selectors";
import DynamicContent from "../../components/DinamicContent/DynamicContent";
import {fetchTips} from "../../store/actions";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser);
    const tips = useSelector(getAllTips);
    const isUsersFetching = useSelector(getUsersFetching);
    const isTipsFetched = useSelector(getTipsFetched);
    const isTipsFetching = useSelector(getTipsFetching);

    useEffect(() => {
        if(!isTipsFetched && !isTipsFetching && currentUser && currentUser._id) {
            dispatch(fetchTips(currentUser._id));
        }
    },[
        isTipsFetched, isTipsFetching, currentUser
    ]);

    return (
        <Container>
            <DynamicContent isLoading={isUsersFetching || isTipsFetching}>
                <UserInfo model={currentUser} />
                <ScoreSection model={currentUser} />
                <TipsList model={tips} caption={'Tips Received'}/>
            </DynamicContent>
        </Container>
    )
}