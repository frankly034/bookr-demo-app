import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Alert = ({ message, isError }) => (
  message && <Alert.Container isError={isError}>{message}</Alert.Container>
);

Alert.Container = styled.div`${
  ({ isError }) => (
    ` background-color: ${isError
      ? 'rgba(255, 0, 0, 0.7)'
      : 'rgba(0, 255, 0, 0.7)'};
      width: 300px;
      margin: 0 auto;
      padding: 0.5rem;
      color: rgba(250, 250, 250, 1)
    `)
}`;

Alert.defaultProps = {
  isError: true,
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

export default Alert;
