import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ title, color, bgColor }) => (
  <Header.Container bgColor={bgColor}>
    <H2 color={color}>{title}</H2>
  </Header.Container>
);

Header.Container = styled.div`
  ${({ bgColor }) => `
      display: flex;
      justify-content: space-around;
      background-color: ${bgColor}
    `}
`;

const H2 = styled.h2`
  ${({ color }) => `
      color: ${color};
    `}
`;

Header.defaultProps = {
  bgColor: '#1D263B',
  color: '#ddd',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
