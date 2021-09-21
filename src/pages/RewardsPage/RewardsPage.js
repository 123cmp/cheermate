import React, {useEffect, useState} from 'react'
import {Container, Form} from "react-bootstrap";
import RewardList from "../../components/RewardList/RewardList";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentUser,
    getFilteredRewards,
    getRewardFilterString,
    getRewardsFetching,
    getRewardsIsFetched, getUserById,
    getUsersFetching
} from "../../store/selectors";
import {fetchRewards, setFilterStringForRewards} from "../../store/actions";
import DynamicContent from "../../components/DinamicContent/DynamicContent";
import {DEBOUNCE_TIMEOUT} from "../../config";
import {getDebounced} from "../../utils";



export default function RewardsPage() {
    const count = 1;

    const dispatch = useDispatch();

    const currentUser = useSelector(getCurrentUser);
    const filterString = useSelector(getRewardFilterString);
    const isRewardsFetching = useSelector(getRewardsFetching);
    const isUsersFetching = useSelector(getUsersFetching);
    const isRewardsIsFetched = useSelector(getRewardsIsFetched);
    const rewards = useSelector(getFilteredRewards);

    const [ filter, setFilter] = useState(filterString);

    useEffect(() => {
        if (!isRewardsIsFetched && !isRewardsFetching) {
            dispatch(fetchRewards());
        }
    });

    const debouncedSetFilterString = getDebounced(
        (filter) => dispatch(setFilterStringForRewards(filter)),
        DEBOUNCE_TIMEOUT
    );

    const handleFilterStringChange = (event) => {
        setFilter(event.target.value);
        debouncedSetFilterString(event.target.value);
    }

    return (
        <Container>
            <DynamicContent isLoading={isUsersFetching || isRewardsFetching}>
                <h1>You have {currentUser.tipsToBeSpent} scores, choose your reward</h1>
                <Form>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            value={filter}
                            placeholder="Type product name"
                            onChange={handleFilterStringChange}/>
                    </Form.Group>
                </Form>
                <RewardList model={rewards}/>
            </DynamicContent>
        </Container>
    )
}