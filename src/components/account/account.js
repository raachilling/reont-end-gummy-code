import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AccountInformation from './accountInformation';
import PurchaseHistor from './purhaseHistory';

class Account extends Componet {

    componentDidMount() {
        const navbarLinks = [
            {
                _id: 0,
                title: 'Purchase History',
                actiive: false,
                component: <PurchaseHistory/>
            },
            {
                _id: 1,
                title: 'Account Information',
                active: true,
                component: <AccountInformation/>
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
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
            <div>
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