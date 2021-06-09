import React,{useContext} from 'react'
import {CartContext} from './CartProvider'

const Cart = () => {
    const {shoppingCart, cost, dispatch} = useContext(CartContext) 
    console.log(useContext(CartContext))
    return (
        <section className="cart">
            <h2 className="carthead">YOUR BAG</h2>
           { shoppingCart.length > 0 ? 
            (shoppingCart.map( e => ( 
            <div className="item_container">
                <div className="product">
                    <img src={e.image} className="cimage"/>
                    <div className="cinside">
                        <div className="tp">
                         <h4>{e.title}</h4>
                         <h5>${e.price}</h5>
                        </div>
                        <button type="button" className="btnxnxx" onClick={()=> dispatch({type:'REMOVE', ID:e.id, currentWholeProduct: e})}>Remove</button>
                    </div>
                </div>
                <div className="incdec">
                <i className="fas fa-sort-up" style={{cursor:"pointer"}} onClick={()=> dispatch({type:'INCREASE', ID:e.id, currentWholeProduct:e})}></i>
                <h5>{e.qty}</h5>
                <i className="fas fa-sort-down" style={{cursor:"pointer"}} onClick={()=> dispatch({type:'DECREASE', ID:e.id, currentWholeProduct:e})}></i>
                </div>
            </div> ))): <h1 className="ctitle">YOUR BAG IS EMPTY</h1>}
            <div className="line"></div>
            <div className="cprice">
                <p>Total</p>
                <h4>${cost}</h4>
            </div>
            <div className="bt">
            <button type="button" className="btnX" onClick={()=> dispatch({type:'CLEAR'})}>CLEAR CART</button>
            </div>
        </section>
    )
}

export default Cart
