import React,{useContext} from 'react';
import {auth} from "../config/firebase"
import {AuthContext} from '../context/AuthService';

const Room = () => {
const user = useContext(AuthContext);

const signout = () => {
    auth.signOut();
};
return (
<>
<h1>Room</h1>
<button onClick={signout}>Logout</button>
</>
    );

};

export default Room;