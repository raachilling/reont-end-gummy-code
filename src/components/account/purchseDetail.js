import React, { Component } from 'react';
import { connect } from 'react-redux';

function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'>{title}</div>
            <div className='purchase-detail-label__value'>{value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {
    render() {
        const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
        const { name, shippingAddress } = user;

        return (
            <div className={`${className} purchase-detail`}>
                purchase detail goes here
                <PurchaseDetailLabel
                 className='purchase-detail__order-number'
                 title='Order Number'
                 value={orderNumber}/>
                <PurchaseDetailLabel
                 className='purchase-detail__order-date'
                 title='Order Date'
                 value={orderDate}/>
                <PurchaseDetailLabel
                 className='purchase-detail__shipping-adress'
                 title='Shipping Address'
                 value={`${name}\n${shippingAddress}`}/>
                <PurchaseDetailLabel
                 className='purchase-detail__total'
                 title='Total'
                 value={total}/>
                <PurchaseDetailLabel
                 className='purchase-detail__credit-card'
                 title='Credit Card'
                 value={creditCard}/>
                <div className='purchase-detail__track-shipment'>Track Shipment</div>
                <div className='purchase-detail__print-receipt'>Print Receipt</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return {
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;