import React, {Component, useContent, useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../context/AuthService";

const LoggedinRoute = ({component, ...otherProps}) => {
    const user = useContext(AuthContext);

    if (user) {
        return (
            <Route  {...otherProps} render={(props) => <Component {...props} />} />
        );
    } else {
        return <Redirect to='/login' />;
    }
    


};