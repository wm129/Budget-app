import React, {Component, useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../context/AuthService";

const LoggedinRoute = ({component, ...otherProps}) => {
    const user = useContext(AuthContext);
return (
<Route  {...otherProps} render={user ? ((props) => <Component {...props} />): <Redirect to='/login' />}/>
);
};
export default LoggedinRoute;