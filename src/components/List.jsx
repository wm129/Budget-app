import React,{ useEffect, useState } from 'react';
import { db } from '../config/firebase';
import Item from './Item';
import Check from './Check';

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
    const deleteItem = (id) => {
        db.collection('budget').doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);    
        });
    }
    return (
    <>
        {budget.map((budget) => {
            return (<Item key={budget.id} budget={budget} deleteItem={deleteItem} />
            );
        })}
        <Check budget={budget} />
    </>
    );
};

export default List;
