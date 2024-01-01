import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../css/Details.css';

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    };

    // Fetches the product details based on the ID from the context
    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id;
            });
            this.setState({ product: data });
        }
    };

    // Calls getProduct method when the component is mounted
    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product } = this.state;
        const { addCart } = this.context;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt={item.title} />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        );
    }
}

export default Details;
