import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../component/Cart/CartProvider'

export default function Navbar() {
    const {quantity} = useContext(CartContext)
    return (
        <nav className="nav">
            <div className="home"><Link to="/" className="text">Dil se Indian</Link></div>
            <div className="right">
                <span className="logo"><Link to="/Cart"><i className="fas fa-shopping-cart" style={{color:"black"}}></i></Link></span> 
                <span className="count"><h3>{quantity}</h3></span>
            </div>
        </nav>
    )
}
