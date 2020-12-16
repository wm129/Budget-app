import React,{useContext, useEffect, useState} from 'react';
import {auth, db} from "../config/firebase"
import {AuthContext} from '../context/AuthService';


import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles({
budget: {
    padding: "15px",
    margin: "15px",
},
})


const Room = () => {
const [budget, setBudget] = useState([]); 
const [figure, setFigure] = useState('');   
const user = useContext(AuthContext);
const classes = useStyles();

const signout = () => {
    auth.signOut();
};

useEffect(() => {
    db.collection('budget')
    .get()
    .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });
        setBudget(data);
    });
},[]);
return (
    <>
        <h1>Room</h1>
            {budget.map((budget) => {
                return (
                <Card key={budget.id} className={classes.budget}>
                    <Typography>user: {budget.name}</Typography>
                    <Typography>{budget.expensive}</Typography>                    
                </Card>
                );
            })}
        <form>
            <TextField 
            variant='filled'
            placeholder="plese write cost in this area"
            value={figure} 
            onChange={(e) => setFigure(e.target.value)} 
            />
            <Button type="submit" variant="contained" color="secondary">Send</Button>
        </form>

        <Button onClick={signout} variant='contained'>Logout</Button>
    </>
    );
};

export default Room;