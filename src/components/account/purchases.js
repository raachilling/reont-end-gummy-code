import React, { Component } from 'react';
import PurchaseHistory from './purchaseHistory';

class Purchases extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                purchases go here
            </div>
        )
        
    }
}

export default Purchases;