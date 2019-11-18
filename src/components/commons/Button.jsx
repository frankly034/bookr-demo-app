import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ title, color, margin }) => (
  <Button.Container color={color} margin={margin}>
    {title}
  </Button.Container>
);

Button.Container = styled.button`
  ${({ color, margin }) => `
      padding: 8px 23px;
      background-color: white;
      color: ${color};       
      text-decoration: none;
      border: 1px solid ${color};       
      border-radius: 5px;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.8s ease-in;
      margin: ${margin}
  
      :hover {
        color: white;
        background-color: ${color};
      `}
`;

Button.defaultProps = {
  color: '#5C6784',
  margin: '0',
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  margin: PropTypes.string,
}

export default Button;
