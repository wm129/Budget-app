import React,{ useState, useContext } from 'react';
import {AuthContext} from '../context/AuthService';
import {db} from '../config/firebase';

import {Button, TextField} from "@material-ui/core";
/*データベースではユーザー名をuser,費用をexpense,と設定する*/
const Form = () => {
    //費用をかく欄にしたいのでbadgetを設定しこれを費用として表示させる
    const [figure, setFigure] = useState('');
    const user = useContext(AuthContext);
   
    const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('budget')
    .add({
        expensive: figure,
        name: user.displayName,
        createdAt: new Date(),
    })
    .then(() => {
        setFigure('');
    });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
            variant='filled'
            placeholder="plese write costs in this area"
            value={figure} 
            onChange={(e) => setFigure(e.target.value)} 
            />
            <Button type="submit" variant="contained" color="secondary">Send</Button>
        </form>
    );
};
export default Form;

/*
const expenseAmount = () => {
    const BudgetData = db.collection('budget')
    BudgetData.where('expensive', '>=', 1)
    .onSnapshot(query => {
        const expenseItem = []
        query.forEach(doc => expenseItem.push({...doc.data(), docId: doc.id}))
    setExpenseItem(expenseItem);
    })
}
*/



