import React, { useState } from 'react';
import {auth, db} from "../config/firebase"

import List from '../components/List';
import Form from '../components/Form';
/* import Check from '../components/Check'; */
import {Button} from "@material-ui/core";



const Room = () => {
const signout = () => {
    auth.signOut();
};

const [budget, setBudget] = useState([]);
db.collection('budget').where('expensive')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, "=>", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting document", error);
    });
return (
    <>
        <h1>Room</h1>
            <List />
            <Form />

        <Button onClick={signout} variant='contained'>Logout</Button>
    </>
    );
};
export default Room;