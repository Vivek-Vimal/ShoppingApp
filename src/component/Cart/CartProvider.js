import React,{useReducer} from 'react'
import Reducer from './Reducer'

export const CartContext = React.createContext();

const CartProvider = (props) => {

    const initialState = {
        shoppingCart: [] ,
        quantity: 0,
        cost: 0,
    };
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <CartContext.Provider value={{...state, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
