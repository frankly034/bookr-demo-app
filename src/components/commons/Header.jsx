import React from 'react';
import styled from 'styled-components';

const Header = ({ title, color, bgColor }) => (
  <Header.Container
    bgColor={bgColor}
  >
    <H2 color={color}>
      {title}
    </H2>
  </Header.Container>
)

Header.Container = styled.div`
  ${
    ({ bgColor }) => `
      display: flex;
      justify-content: space-around;
      background-color: ${ bgColor || '#1D263B'}
    `
  }
`;

const H2 = styled.h2`
  ${
    ({ color }) => `
      color: ${color || '#ddd'};
    `
  }
`;

export default Header;
