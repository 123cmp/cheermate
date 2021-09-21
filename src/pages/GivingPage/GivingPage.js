import React, {useEffect, useState} from 'react'
import { Container, Form } from "react-bootstrap";
import UserList from "../../components/UserList/UserList";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentUser,
    getFilteredUsers,
    getUserById,
    getUsersFetching,
    getUsersFilterString
} from "../../store/selectors";
import {setFilterStringForUsers} from "../../store/actions";
import DynamicContent from "../../components/DinamicContent/DynamicContent";

export default function GivingPage() {
    const dispatch = useDispatch();

    const currentUser = useSelector(getCurrentUser);
    const users = useSelector(getFilteredUsers);
    const filterString = useSelector(getUsersFilterString);
    const isUsersFetching = useSelector(getUsersFetching);

    const [ filter, setFilter] = useState(filterString);

    const handleFilterStringChange = (event) => dispatch(
        setFilterStringForUsers(event.target.value)
    )

    return (
        <Container>
            <DynamicContent isLoading={isUsersFetching}>
                <h1>You have {currentUser.tipsToBeSent} scores to give</h1>
                <Form>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            value={filterString}
                            onChange={handleFilterStringChange}
                            placeholder="Type name" />
                    </Form.Group>
                </Form>
                <UserList model={users}/>
            </DynamicContent>
        </Container>
    )
}