import React from 'react'
import {Container, Form} from "react-bootstrap";
import RewardList from "../../RewardList/RewardList";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredRewards, getRewardFilterString} from "../../../store/selectors";
import {setFilterStringForRewards} from "../../../store/actions";

export default function RewardsPage() {
    const filterString = useSelector(getRewardFilterString);
    const dispatch = useDispatch();
    const rewards = useSelector(getFilteredRewards);
    const count = 1;

    const handleFilterStringChange = (event) => dispatch(
        setFilterStringForRewards(event.target.value)
    )

    return (
        <Container>
            <h1>You have {count} scores, choose your reward</h1>
            <Form>
                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="text"
                        value={filterString}
                        placeholder="Type product name"
                        onChange={handleFilterStringChange}/>
                </Form.Group>
            </Form>
            <RewardList model={rewards}/>
        </Container>
    )
}