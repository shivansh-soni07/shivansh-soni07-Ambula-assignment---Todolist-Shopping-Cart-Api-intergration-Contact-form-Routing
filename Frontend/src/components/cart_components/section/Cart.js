import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../css/Details.css';
import '../css/Cart.css';

export class Cart extends Component {
    static contextType = DataContext;

    // Calculate total when component mounts
    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            // Display message if cart is empty
            return <h2 style={{textAlign:"center"}}>No Products Added</h2>;
        } else {
            // Display cart items and total
            return (
                <>
                    {cart.map(item => (
                        <div className="details cart" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item._id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item._id)}> + </button>
                                </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(item._id)}>Delete</div>
                        </div>
                    ))}
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            );
        }
    }
}

export default Cart;
