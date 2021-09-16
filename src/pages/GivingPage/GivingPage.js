import React from 'react'
import { Container, Form } from "react-bootstrap";
import UserList from "../../components/UserList/UserList";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredUsers, getUserById, getUsersFilterString} from "../../store/selectors";
import {setFilterStringForUsers} from "../../store/actions";

export default function GivingPage() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => getUserById(state, "123"));
    const users = useSelector(getFilteredUsers);
    const filterString = useSelector(getUsersFilterString);

    const handleFilterStringChange = (event) => dispatch(
        setFilterStringForUsers(event.target.value)
    )

    return (
        <Container>
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
        </Container>
    )
}