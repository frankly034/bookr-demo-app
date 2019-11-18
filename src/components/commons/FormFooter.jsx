import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const footerParams = {
  login: {
    body: 'Don\'t have an account? ', linkTo: '/signup', linkTitle: 'Signup',
  },
  signup: {
    body: 'Have an account? ', linkTo: '/', linkTitle: 'Login',
  },
  default: {
    body: '', linkTo: '', linkTitle: '',
  },
};

const FormFooter = ({ type }) => {
  const { body, linkTo, linkTitle } = footerParams[type];
  return (
    <FormFooter.Container>
      {body}
      <Link to={linkTo}>{linkTitle}</Link>
    </FormFooter.Container>
  );
};

FormFooter.propTypes = {
  type: PropTypes.string.isRequired,
};

FormFooter.Container = styled.p`
  text-decoration: none;
`;

export default FormFooter;
