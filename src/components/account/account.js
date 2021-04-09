import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AccountInformation from './accountInformation';
import PurchaseHistor from './purhaseHistory';

class Account extends Componet {

    componentDidMount() {
        const headerLinks = [{
            _id: 0,
            title: 'Shop',
            path: '/shop'
        }, 
        {
            _id: 1,
            title: 'Logout',
            path: '/'
        }]

        const navbarLinks = [
            {
                _id: 0,
                title: 'Purchase History',
                actiive: true,
                component: <PurchaseHistory/>
            },
            {
                _id: 1,
                title: 'Account Information',
                active: false,
                component: <AccountInformation/>
            }
        ]

        this.props.setHeaderLinks([headerLinks]);
        this.props.setNavbarLinks([navbarLinks]);
    }

    renderContent() {
        if(this.props.navbarLinks) {
            this.props.navbarLinks.forEach(link => {
                if(link.active) {
                    jsx = link.component
                }
            })
        }
        return jsx;
    }

    render() {
        return (
            <div className='account'>
                { this.renderContent() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Account = connect(null, actions)(Account);

export default Account;