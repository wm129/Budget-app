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
        deleteItem();
    };
    const classes = useStyles();
    //const date = budget.createdAt;
    //const dateStamp = date.toDate();
    console.log(budget.createdAt.toDate); //JSX objectをそのまま返していた　＝＞　toString()で文字に型を変更して渡すと解決
    return(
        <Card key={budget.id} className={classes.budget}>
                <Typography>wtitten by: {budget.name}, date: {budget.createdAt.toDate().toString()} </Typography>
                <Typography>expense: {budget.expensive}yen</Typography> 
                <button onClick={handleClick} type="button">delete</button>                   
        </Card>
    );
};

export default Item;