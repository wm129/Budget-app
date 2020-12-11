import React from 'react';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Login from './pages/Login';
import Room from './pages/Room';
import Signup from './pages/Signup';


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Room} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        
        </Switch>
        </BrowserRouter>
    );
};

export default App;
