import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import '../css/Products.css';

export class Products extends Component {
    // Set the context type to DataContext
    static contextType = DataContext;

    render() {
        // Destructure the products and addCart function from the context
        const { products, addCart } = this.context;
        return (
            <div id="product">
                {
                    // Map through the products and render a card for each product
                    products.map(product => (
                        <div className="card" key={product._id}>
                            {/* Link to the individual product page */}
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    {/* Link to the individual product page */}
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                {/* Button to add the product to the cart */}
                                <button onClick={() => addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products;
