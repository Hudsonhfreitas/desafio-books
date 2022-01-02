import { createContext } from "react";
import useAtt from '../Hooks/useAtt';

export const AttContext = createContext();

export const AttProvider = ({children}) => {

    const {authenticated, loading, handleLogin, handleLogout} = useAtt();
    return (
        <AttContext.Provider value={{authenticated, loading, handleLogin, handleLogout}}>
            {children}
        </AttContext.Provider>
    )
}
