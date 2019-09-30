import React, { Component } from 'react';
import Form from '../commons/Form';
import PageTemplate from '../commons/PageTemplate';

const inputFields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'enter email'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'enter password'
  }
];

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    this.onSubmit = (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      const formData = {
        email,
        password
      };
    }
  }

  render(){
    return (
      <PageTemplate>
        <Form
          formTitle='Login Form'
          inputFields={inputFields}
          buttonTitle='Login'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </PageTemplate>
    );
  }
}

export default LoginPage; 
