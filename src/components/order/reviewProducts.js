import React, { Component } from 'react';

import { connect } from 'react-redux';

class ReviewProducts extends Component {
    render(){
        const { className } = this.props;
        return (
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map(cartProduct => {
                        <h1 key={product._id}>{product.product.title}</h1>
                    })
                }
            </div>
        )
    }
}

function mapaStateToProps(state) {
    const { cartProducts } = state.user;
    return {cartProducts}
}

ReviewProducts = connect(mapaStateToProps)(ReviewProducts);

export default ReviewProducts;