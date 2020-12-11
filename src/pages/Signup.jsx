import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button,TextField} from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        color: "Blue"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        height: "400px",
        margin: "0 auto"
    }
})

const Signup = () => {
    const classes = useStyles()
return (
    <form className={classes.form}>
        <h1 className={classes.title}>Signup</h1>
        <TextField label="username" variant="outlined" />
        <TextField label="emailadress" variant="filled" />
        <TextField label="password" variant="outlined" />
        <Button variant="contained" color="primary">登録</Button>
        <p>Jump to Signin page</p>
    </form>
)
};

export default Signup;