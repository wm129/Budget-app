import React, { useContext } from 'react';

/*データベースではユーザー名をuser,費用をexpense,と設定する*/
const Form = () => {
    //費用をかく欄にしたいのでbadgetを設定しこれを費用として表示させる
    const [badget, setBadget] = useState('');
    const user = useContext(AuthContext);
   
    const handleSubmit = (e) => {
e.preventDefault();
if (text.length === 0) {
    alert('plese fill in blank');
    return;
}
    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea></textarea>
            <button>送信</button>
        </form>
    );
};
export default Form;





