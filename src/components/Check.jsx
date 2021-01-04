import React from 'react';

const Check = ({budget}) => {
const expenseAmount = budget.map(budget => parseInt(budget.expensive));
const expenseTotal = expenseAmount.reduce((acc, cur) => acc += cur,0);
const medicalExpense = Number(expenseTotal);

return (
<>
    <div className="check">
    <h3>Your　medical expense Total  {Number(expenseTotal)}yen</h3>
    <h3>Are you eligible for medical expense deduction?  
    { medicalExpense >= 100000 ? <span>Yes</span> : <span>No</span> }
    </h3>
    </div>
</> 
);       
};

export default Check;
