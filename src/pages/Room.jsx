import React,{useContext, useEffect, useState} from 'react';
import {auth, db} from "../config/firebase"
import {AuthContext} from '../context/AuthService';

const Room = () => {
const [budget, setBudget] = useState([]);    
const user = useContext(AuthContext);

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
        <ul>
            {budget.map((budget) => {
                return (
                <li key={budget.id}>
                    <p>user: {budget.name}</p>
                    <p>{budget.expensive}</p>                    
                </li>
                );
            })}
        </ul>
        <button onClick={signout}>Logout</button>
    </>
    );
};

export default Room;