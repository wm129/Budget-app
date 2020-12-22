import React from 'react';

import {Card, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    budget: {
        padding: "15px",
        margin: "15px",
    },
    });
    
const Item = ({budget}) => {
    const classes = useStyles();
    //const date = budget.createdAt;
    //const dateStamp = date.toDate();
    console.log(budget.createdAt.toDate); //JSX objectをそのまま返していた　＝＞　toString()で文字に型を変更して渡すと解決
    return(
        <Card key={budget.id} className={classes.budget}>
                <Typography>wtitten by: {budget.name}, date: {budget.createdAt.toDate().toString()} </Typography>
                <Typography>expense: {budget.expensive}yen</Typography>                    
        </Card>
    );
};

export default Item;