import * as React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  width: 300px;
  height: max-content;
  border-radius: 10px;
  background-color: white;
  box-shadow: -2px 2px 10px 2px rgba(0, 0, 0, 0.08);
  padding-left: 20px;
  margin-left: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const HeaderText = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;

const BirthDayCardContainer = props => (
  <div>
    <Header>
      {props.header.icon}
      <HeaderText>{props.header.title}</HeaderText>
    </Header>
    <Container>{props.children}</Container>
  </div>
);

export default BirthDayCardContainer;
