import * as React from 'react';
import styled from 'styled-components';

const CardContents = styled.div`
  overflow: hidden;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`;

const BlackBG = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  background-color: #000;
`;
const NewCardsContent = props => {
  return (
    <BlackBG>
      <CardContents style={{background: `url(${props.background})`}}>
        {props.children}
      </CardContents>
    </BlackBG>
  );
};
export default NewCardsContent;
