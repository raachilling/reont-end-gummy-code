import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                sign innn
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForn);

export default SignInForm; 