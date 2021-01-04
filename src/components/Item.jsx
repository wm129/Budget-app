import React from 'react';

import {Card, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    budget: {
        padding: "0px",
        margin: "5px",
    },
    });
    
const Item = ({budget, deleteItem }) => {
    const handleClick = () => {
        deleteItem(budget.id);
    };
    const classes = useStyles();
    console.log(budget.createdAt.toDate); 
    return(
        <Card key={budget.id} className={classes.budget}>
                <Typography>wtitten by: {budget.name}, date: {budget.createdAt.toDate().toString()} </Typography>
                <Typography>expense: {budget.expensive}yen</Typography> 
                <button onClick={handleClick} type="button">delete</button>                   
        </Card>
    );
};

export default Item;