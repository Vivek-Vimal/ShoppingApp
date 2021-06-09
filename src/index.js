import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import ProductDataProvider from './component/Product/ProductDataProvider'
import CartProvider from './component/Cart/CartProvider'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render(<Router><ProductDataProvider><CartProvider><App /></CartProvider></ProductDataProvider></Router>,document.getElementById('root'))
