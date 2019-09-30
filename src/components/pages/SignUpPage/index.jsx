import React, {Component} from 'react';
import Form from '../../commons/Form';
import PageTemplate from '../../commons/PageTemplate';
import inputFields from './formData';


class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }

    this.onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    this.onSubmit = (event) => {
      event.preventDefault();
      const {firstName, lastName, email, password} = this.state;
      const formData = {
        firstName,
        lastName,
        email,
        password
      };
    }
  }

  render(){
    return (
      <PageTemplate>
        <Form 
          formTitle='Signup Form'
          inputFields={inputFields}
          buttonTitle='signup'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </PageTemplate>
    );
  }
}

export default SignUpPage;
