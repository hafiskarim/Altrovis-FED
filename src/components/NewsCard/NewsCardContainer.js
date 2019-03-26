import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-right: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;

const NewsCardContainer = props => (
  <Container>
    <Header>
      {props.header.icon}
      <HeaderText>{props.header.title}</HeaderText>
    </Header>
    <Content>{props.children}</Content>
  </Container>
);

export default NewsCardContainer;
