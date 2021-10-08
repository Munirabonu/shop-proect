import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext=createContext()

const initialState={
    goods:[],
    loading:true,
    order:[],
    basketShop:false
}

export const ContextProvider = ({children}) =>{

    const [value, dispatch] =useReducer(reducer, initialState)

    value.onToggleBuy =(item) =>{
        dispatch ({type:"ON_TOGGLE_BUY",payload:item})
    }
    value.removeBasket= (itemID) =>{
        dispatch ({type:"REMOVE_BASKET",payload:{id:itemID}})
    }
    value.increment = (itemID) => {
        dispatch({type:'INCREMENT', payload:{id:itemID}})
    }
    value.decrement = (itemID) => {
        dispatch({type:'DECREMENT', payload:{id:itemID}})
    }
    value.handleBasketShop =() =>{
        dispatch({type:"HANDLE_BASKET_SHOP"})
    }
    value.setGoods =(data) => {
        dispatch({type:'SET_GOODS',payload:data})
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}