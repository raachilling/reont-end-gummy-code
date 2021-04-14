import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    renderContent() {
        return <h1> content </h1>
    }

    render() {
        return (
            <div className='account-information'>
                <PageTitle className='account-information' title='Account Information' />
                <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form' />
            </div>
        )
    }
}

export default AccountInformation;