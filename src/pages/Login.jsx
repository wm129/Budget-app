import React, { useState } from 'react';
import {auth} from "../config/firebase";
import {makeStyles} from '@material-ui/core/styles';
import {Button,TextField} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
        color: 'red',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '60%',
        height: '400px',
        margin: '0 auto',
    },
});

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const classes = useStyles()
const history = useHistory()

const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then((response)=>{
            history.push('/');
        })
        .catch((error)=>{
            console.error("ERR", error)
        })
};
return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <h1 className={classes.title}>Login</h1>
        <TextField 
        label="emailadress" 
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
        <TextField
        type="password" 
        label="password" 
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         />
        <Button type="submit" variant="contained" color="secondary">Login</Button>
        <Link to='/signup'>Don't you have an account?</Link>
    </form>
    );
};

export default Login;