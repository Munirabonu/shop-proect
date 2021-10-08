import { toast } from "react-toastify"
export function reducer(state, { type, payload }) {
    switch (type) {
        case "REMOVE_BASKET":
            toast.error('Goods delete from basket successfully !')
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }

        case "ON_TOGGLE_BUY": {
            const itemIdex = state.order.findIndex((orderItem) => orderItem.id === payload.id)
            let newOrder = null
            if (itemIdex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIdex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    }
                    else {
                        return orderItem
                    }
                })
            }
            toast.success('Goods added to basket successfully !')
            return {
                ...state,
                order: newOrder
            }
        }
        case "INCREMENT": {

            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity + 1
                        return {
                            ...el,
                            quantity: newQuantity
                        }
                    } else {
                        return el
                    }
                })
            }

        }
        case "DECREMENT":
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity - 1
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return el
                    }
                })
            }
        case "HANDLE_BASKET_SHOP":
            return {
                ...state,
                basketShop: !state.basketShop
            }
        case "SET_GOODS":
            return {
                ...state,
                goods:payload || [],
                loading:false
            }
        default:
            return state
    }
}