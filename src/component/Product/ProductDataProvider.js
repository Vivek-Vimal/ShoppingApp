import React, { createContext } from 'react'
import {ProductData} from './ProductData'

export const ProductContext = createContext();

const ProductDataProvider = (props) => {
    return (
        <ProductContext.Provider value= {[...ProductData]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductDataProvider
