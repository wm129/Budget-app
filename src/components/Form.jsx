import React,{ useState, useContext } from 'react';
import {AuthContext} from '../context/AuthService';
import {db} from '../config/firebase';

import { Button , Input } from "@material-ui/core";

/*データベースではユーザー名をuser,費用をexpense,と設定する*/
const Form = () => {
    //費用をかく欄にしたいのでbadgetを設定しこれを費用として表示させる
    const [figure, setFigure] = useState(0);
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
        setFigure(0);
    });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input 
            type="number"
            value={figure} 
            onChange={(e) => setFigure(e.target.value)} 
            />
            <Button type="submit" variant="contained" color="secondary">Send</Button>
        </form>
    );
};
export default Form;




