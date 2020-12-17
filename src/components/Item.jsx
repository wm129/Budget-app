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
    return(
        <Card key={budget.id} className={classes.budget}>
                <Typography>user: {budget.name}</Typography>
                <Typography>{budget.expensive}</Typography>                    
        </Card>
    );
};

export default Item;