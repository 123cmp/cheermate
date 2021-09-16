import React from 'react'

import styles from './AuthorizationPage.module.css';
import AuthorizationForm from "../../components/AuthorizationForm/AuthorizationForm";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {authorize} from "../../store/actions";

export default function AuthorizationPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (form) => {
        dispatch(authorize(form))
        history.push('/');
    }

    return (
        <div className={styles.formContainer}>
            <AuthorizationForm onSubmit={handleSubmit}/>
        </div>
    )
}