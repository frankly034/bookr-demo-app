import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({
  name,
  type,
  placeholder,
  padding,
  borderRadius,
  onChange,
  margin,
  autocomplete,
}) => (
  <div>
    <Input.Container
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      padding={padding}
      borderRadius={borderRadius}
      onChange={onChange}
      margin={margin}
      autoComplete={autocomplete}
    />
  </div>
);

Input.Container = styled.input`
  ${({ padding, borderRadius, margin }) => `
    padding: ${padding};
    width: 300px;
    border: none;
    border: solid 1px #333;
    transition: all 0.8s ease-in;
    border-radius: ${borderRadius};
    margin: ${margin};

    :hover {
      box-shadow: 1px 1px 3px #5C6784;
    `}
`;

Input.defaultProps = {
  padding: '10px',
  borderRadius: '5px',
  margin: '0',
  type: 'input',
  placeholder: '',
  autocomplete: 'off',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.string,
  autocomplete: PropTypes.string,
};

export default Input;
