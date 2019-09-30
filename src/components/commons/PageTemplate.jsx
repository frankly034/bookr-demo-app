import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const PageTemplate = ({ children }) => (
  <PageTemplate.Container>
    <Header title='Bookr App'/>
    {children}
  </PageTemplate.Container>
);

PageTemplate.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PageTemplate;
