import React, { Component } from 'react';
import PurchaseHistory from './purchaseHistory';

class PurchaseDetail extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchase-detail`}>
                purchases detail goes here
            </div>
        )
        
    }
}

export default PurchaseDetail;