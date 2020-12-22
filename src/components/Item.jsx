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
    return(
        <Card key={budget.id} className={classes.budget}>
                <Typography>wtitten by: {budget.name}, date: {budget.createdAt.toDate} </Typography>
                <Typography>expense: {budget.expensive}yen</Typography>                    
        </Card>
    );
};

export default Item;