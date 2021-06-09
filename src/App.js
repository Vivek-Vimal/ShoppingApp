import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home/Home'
import Cart from './component/Cart/Cart'
import NotFound from './component/NotFound'
import {Switch , Route} from 'react-router-dom'
import './App.css'

export default function App() {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component= {Home}/>
            <Route exact path="/Cart" component={Cart}/>
            <Route component={NotFound}/>
        </Switch>
        </>
    )
}
