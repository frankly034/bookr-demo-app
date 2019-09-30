import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../../commons/Form';
import PageTemplate from '../../commons/PageTemplate';
import inputFields from './formData';
import { signUp } from '../../../actions/userAction';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    this.onSubmit = async (event) => {
      event.preventDefault();
      const {
        firstName, lastName, email, password,
      } = this.state;
      const { signup, history } = this.props;
      try {
        const { data } = await signup({
          firstName,
          lastName,
          email,
          password,
        });
        if (data) {
          return history.push('/books');
        }
      } catch (error) {
        console.log('signup error', error);
      }
    };
  }

  render() {
    const { loading, errors } = this.props;
    return (
      <PageTemplate>
        <Form
          formTitle="Signup Form"
          inputFields={inputFields}
          buttonTitle="signup"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          loading={loading}
          formType="signup"
          errors={errors}
        />
      </PageTemplate>
    );
  }
}

SignUpPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.user.signingUp,
  errors: state.user.errors,
});

SignUpPage.propTypes = {
  signup: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  { signup: signUp },
)(withRouter(SignUpPage));
