import React from 'react';


import {makeStyles} from "@material-ui/core/styles";
import {Card, Typography} from "@material-ui/core";
import Item from './Item';

const useStyles = makeStyles({
budget: {
    padding: "15px",
    margin: "15px",
},
});

const List = ({budget}) => {
    const classes = useStyles();
    return (
    <>
        {budget.map((budget) => {
            return (<Item key={budget.id} budget={budget}/>
            );
        })}
    </>
    );
};

export default List;
