import React from 'react'

import styles from './RegistrationPage.module.css';
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {register} from "../../store/actions";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (form) => {
        dispatch(register(form))
        history.push('/');
    }

    return (
        <div className={styles.formContainer}>
            <RegistrationForm onSubmit={handleSubmit}/>
        </div>
    )
}