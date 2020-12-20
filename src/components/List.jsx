import React,{ useEffect, useState } from 'react';
import { db } from '../config/firebase';
import Item from './Item';

const List = () => {
    const [budget, setBudget] = useState([]); 
    useEffect(() => {
        db.collection('budget').orderBy('createdAt').onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
                });
                setBudget(data);    
        });
    },[]);
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
