import * as React from 'react';
import styled from 'styled-components';


const Content = styled.div`
  width: 300px;
  height: max-content;
  padding-left: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  padding-left: 20px;
  margin-left: 20px;
`;

const HeaderText = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;

const CornerCardContainer = props => (
    <div>
        <Header>
            {props.header.icon}
            <HeaderText>{props.header.title}</HeaderText>
        </Header>
        <Content>{props.children}</Content>
    </div>
)

export default CornerCardContainer;