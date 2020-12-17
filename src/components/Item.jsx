import React from 'react';

import {Card, Typography} from '@material-ui/core';

const Item = ({budget}) => {
    return(
        <Card key={budget.id} className={classes.budget}>
                <Typography>user: {budget.name}</Typography>
                <Typography>{budget.expensive}</Typography>                    
            </Card>
    );
};

export default Item;