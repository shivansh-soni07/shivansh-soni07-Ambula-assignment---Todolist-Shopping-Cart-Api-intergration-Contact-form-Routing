import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route ,Routes} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'

// Routes for all the endpoints for cart component
export class Section extends Component {
    render() {
        return (
            <section>
                <Routes>

                    
                    <Route path="/shopping" component={Products} exact  />
                    <Route path="/shopping/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                </Routes>
            </section>
        )
    }
}

export default Section
