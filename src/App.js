import './App.css';
import React from "react";
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
import PrivateRoute from "./components/PrivateRoute";
import {useSelector} from "react-redux";
import {getIsAuthorized} from "./store/selectors";

function App() {
    const isAuthorized = useSelector(getIsAuthorized);
    return (
        <div className="App">
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

                    <Redirect to='/' />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
