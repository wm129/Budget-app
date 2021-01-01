import React from 'react';
import {auth} from "../config/firebase"

import List from '../components/List';
import Form from '../components/Form';
import {Button} from "@material-ui/core";

import '../App.css';
const Room = () => {
const signout = () => {
    auth.signOut();
};

return (
    <>
    <div className="container">
        <div className="app-wrapper">
        <div className="header">   
            <h1>Medical Expense</h1>
        </div>
            <List />
            <Form />
            <div className="logout-button">
            <Button onClick={signout} variant='contained'>Logout</Button>
            </div>
        </div>
    </div>
    </>
    );
};
export default Room;