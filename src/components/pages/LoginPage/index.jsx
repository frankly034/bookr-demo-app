import React, { Component } from 'react';
import Form from '../../commons/Form';
import PageTemplate from '../../commons/PageTemplate';
import inputFields from './formData';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    this.onSubmit = (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      const formData = {
        email,
        password,
      };
    };
  }

  render() {
    return (
      <PageTemplate>
        <Form
          formTitle="Login Form"
          inputFields={inputFields}
          buttonTitle="Login"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          formType="login"
        />
      </PageTemplate>
    );
  }
}

export default LoginPage;
