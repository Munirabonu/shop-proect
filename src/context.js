import { createContext } from "react";


export const ShopContext=createContext()

export const ContextProvider = ({children}) =>{
    const value={
        example:'hello content provider'
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}