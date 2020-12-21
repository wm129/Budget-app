import React from 'react';

const Check = ({budget}) => {
const expenseAmount = budget.map(budget => budget.expensive);
const expenseTotal = expenseAmount.reduce((acc, cur) => acc += cur,0);

return <div>Total{Number(expenseTotal)}yen</div>;  
};

export default Check;

/*

db.collection("cities").where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });


*/