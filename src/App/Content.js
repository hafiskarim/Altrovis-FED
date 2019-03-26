import * as React from 'react';
import styled from 'styled-components';
import ContentWide from './ContentWide';
import ContentShort from './ContentShort';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = () => {
  return (
    <Container>
      <ContentWide />
      <ContentShort />
    </Container>
  );
};

export default Content;
