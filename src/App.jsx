import React from 'react';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AuthProvider} from './context/AuthService';
import LoggedinRoute from './components/LoggedinRoute';
import Login from './pages/Login';
import Room from './pages/Room';
import Signup from './pages/Signup';


const App = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
        <Switch>
            <LoggedinRoute exact path="/" component={Room} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        
        </Switch>
        </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
