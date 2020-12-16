import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {auth} from "../config/firebase";
import {makeStyles} from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        color: "Blue"
    },
    form: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "60%",
        height: "400px",
        margin: "0 auto"
    }
})

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const classes = useStyles()

    const handleSubmit= (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((response) => {
            console.log('ok', response);
            response.user.updateProfile({
                displayName: username,
            })
        })
        .catch((error) => {
            console.error("ERR", error)
        })
    }
return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <h1 className={classes.title}>Signup</h1>
        <TextField 
        label="username" 
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        />
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
        <Button type="submit" variant="contained" color="primary">登録</Button>
        <Link to='login'>Jump to　Login page</Link>
    </form>
)
};

export default Signup;