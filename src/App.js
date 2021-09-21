import './App.css';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import GivingPage from "./pages/GivingPage/GivingPage";
import RewardsPage from "./pages/RewardsPage/RewardsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuthorized, getUsersFetching, getUsersIsFetched} from "./store/selectors";
import {ToastContainer} from 'react-toastify';
import {fetchUsers} from "./store/actions";

function App() {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(getIsAuthorized);
    const isUsersFetching = useSelector(getUsersFetching);
    const isUsersFetched = useSelector(getUsersIsFetched);

    useEffect(() => {
        if(!isUsersFetched && !isUsersFetching) {
            dispatch(fetchUsers());
        }
    })

    return (
        <div className="App">
            <ToastContainer/>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/registration">
                        <RegistrationPage/>
                    </Route>
                    <Route path="/authorization">
                        <AuthorizationPage/>
                    </Route>
                    <PrivateRoute
                        path="/giving"
                        isAuthorized={isAuthorized}
                        fallbackUrl="/authorization"
                        component={GivingPage}
                    />
                    <PrivateRoute
                        path="/rewards"
                        isAuthorized={isAuthorized}
                        fallbackUrl="/authorization"
                        component={RewardsPage}
                    />
                    <PrivateRoute
                        path="/"
                        isAuthorized={isAuthorized}
                        fallbackUrl="/authorization"
                        component={ProfilePage}
                    />

                    <Redirect to='/'/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
