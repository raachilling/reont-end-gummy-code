import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';


class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='sign-in-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>
                <Field className='sign-in-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>

                <Field className='sign-in-form__street-adress'
                type='adress'
                title='Street Address'
                placeholder='Street Address'
                name='address'
                component={FormInput}/>
                <Field className='sign-in-form__city'
                type='city'
                title='City'
                placeholder='City'
                name='city'
                component={FormInput}/>

                <Field className='sign-in-form__state'
                type='state'
                title='State'
                placeholder='State'
                name='state'
                component={FormInput}/>
                <Field className='account-information-form__zipcode'
                type='zipcode'
                title='Zipcode'
                placeholder='Zipcode'
                name='zipcode'
                component={FormInput}/>


                {/* <Field className='account-information-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login'
                onClick={() => history.push('/account')}
                type='login'
                title='Login'
                name='login'
                component={FormButton}/> */}
            </form>
        )
   }
}

AccountInformationForm = reduxForm({
    from: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;