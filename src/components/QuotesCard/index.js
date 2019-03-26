import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 150px;
  background: #255d9f;
  border-radius: 10px;
`;

const Quote = styled.div`
  height: 100%;
  font-size: 15px;
  font-weight: 300;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

const QuotesCard = props => {
  return (
    <Content>
      <Quote>{props.quotes}</Quote>
    </Content>
  );
};

export default QuotesCard;
