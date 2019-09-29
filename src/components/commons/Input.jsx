import React from 'react';
import styled from 'styled-components';

const Input = ({
  name,
  type, 
  placeholder,
  padding,
  borderRadius,
  onChange,
  margin
}) => (
  <div>
    <Input.Container
      name={name}
      type={type}
      placeholder={placeholder}
      padding={padding}
      borderRadius={borderRadius}
      onChange={onChange}
      margin={margin}
    />
  </div>
)

Input.Container = styled.input`
  ${({ padding, borderRadius, margin}) => `
    padding: ${ padding || '10px'};
    width: 300px;
    border: none;
    border: solid 1px #333;
    transition: all 0.8s ease-in;
    border-radius: ${ borderRadius || '5px'};
    margin: ${margin || 0};

    :hover {
      box-shadow: 1px 1px 3px #5C6784;
    `
  }
`;

export default  Input;
