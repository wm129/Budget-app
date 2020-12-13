import React, {createContext} from 'react';

const AuthContext = createContext()

const AuthProvider = ({children}) => {
const someValue = "hi"
return (
<AuthContext.Provider value={someValue}>{children}</AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };