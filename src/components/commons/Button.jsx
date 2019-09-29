import React from 'react';
import styled from 'styled-components';

const Button = ({title, color, margin}) => (
  <Button.Container
    color={color}
    margin={margin}
  >
    {title}
  </Button.Container>
)

Button.Container = styled.button`
  ${
    ({color, margin}) => `
      padding: 8px 23px;
      background-color: white;
      color: ${color || `#5C6784;`};       
      text-decoration: none;
      border: 1px solid ${color || `#5C6784;`};       
      border-radius: 5px;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.8s ease-in;
      margin: ${margin || 0}
  
      :hover {
        color: white;
        background-color: ${color || `#5C6784;`};
      `
  }
`;

export default Button;
