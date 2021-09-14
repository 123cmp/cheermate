import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import GivingPage from "./components/pages/GivingPage/GivingPage";
import RewardsPage from "./components/pages/RewardsPage/RewardsPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/giving">
                        <GivingPage/>
                    </Route>
                    <Route path="/rewards">
                        <RewardsPage/>
                    </Route>
                    <Route path="/">
                        <ProfilePage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
