import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 300px;
  height: max-content;
  padding-right: 20px;
  margin-bottom: 50px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
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

const AnnouncementCardContainer = props => (
  <div style={{width: '300px'}}>
    <Header>
      {props.header.icon}
      <HeaderText>{props.header.title}</HeaderText>
    </Header>
    <Content>{props.children}</Content>
  </div>
);

export default AnnouncementCardContainer;
