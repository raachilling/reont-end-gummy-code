import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
    render(){
        const { className } = this.props;
        return (
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map(cartProduct => {
                        return <ReviewProduct 
                        key={product._id}
                        {...cartProduct}
                        />
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