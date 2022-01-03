import { createContext } from "react";
import useAtt from '../Hooks/useAtt';

export const AttContext = createContext();

export const AttProvider = ({children}) => {

    const {authenticated, handleLogin, handleLogout} = useAtt();
    
    return (
        <AttContext.Provider value={{authenticated, handleLogin, handleLogout}}>
            {children}
        </AttContext.Provider>
    )
}
