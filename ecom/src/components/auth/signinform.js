import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
  render() {
    const { className } = this.props
    return (
        <form className={`${className} sign-in-form`}>
            Sign In
        </form>
    );
  }
}

SignIn = reduxForm({
  form: 'SignInForm'
})(SignIn);

export default SignInForm;