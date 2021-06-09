import React,{useContext, useState} from 'react'
import {ProductContext} from '../Product/ProductDataProvider'
import {CartContext} from '../Cart/CartProvider'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development'
 
const DisplayProducts = () => {

    const items= useContext(ProductContext) // console.log(items);
    const {dispatch} = useContext(CartContext) //console.log(dispatch);
// ***IMPORTANT*** Yaha pe dispatch ek function hai Jo ki hm cart provider se paas kiye h, dispatch ke jagah aur kch likhenge tou error aayega ki it is not a function  

        // Show,Hide button starts//
    const [scroll, setScroll] = useState(false)
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 1100)
           setScroll(true)
        else
           setScroll(false)
    })
      // End Of Show, Hide button //
    const scrollToTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }  
    return (
        <>
        <div className= {scroll ? "scrollshow": "noshow"}>
        <i className="fas fa-angle-double-up" onClick={scrollToTop}></i>
        </div>
        <section className="main">
            { items.map( e => (
            <div className="box">
                <img src={e.image} alt={e.category} className="image"/>
                <h3 className="title">{e.title}</h3>
                <h4 className="price">${e.price}</h4>
                <button type="button" className="btxn" onClick={()=>dispatch({type:'ADD', ID:e.id, eachWholeProduct: e})}>Add To Cart</button>
            </div>
            ))}
        </section>
        </>
    )
}

export default DisplayProducts
