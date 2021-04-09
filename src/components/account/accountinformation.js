import React, { Component } from 'react';

class AccountInformation extends Component {

    renderContent() {
        return <h1> content </h1>
    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

export default AccountInformation;