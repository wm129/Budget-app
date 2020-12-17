import React,{useContext, useEffect, useState} from 'react';
import {auth, db} from "../config/firebase"
import {AuthContext} from '../context/AuthService';

import List from '../components/List';
import Form from '../components/Form';

import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, TextField, Typography} from "@material-ui/core";



const Room = () => {
const [budget, setBudget] = useState([]); 
const [figure, setFigure] = useState('');   
const user = useContext(AuthContext);


const signout = () => {
    auth.signOut();
};

const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('budget')
    .orderBy('createdAt')
    .add({
        expensive: figure,
        name: user.displayName,
        createdAt: new Date(),
    });
};

useEffect(() => {
    db.collection('budget').onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
            });
            setBudget(data);    
    });
},[]);
return (
    <>
        <h1>Room</h1>
            <List budget={budget} />
            <Form />
        <Button onClick={signout} variant='contained'>Logout</Button>
    </>
    );
};

export default Room;