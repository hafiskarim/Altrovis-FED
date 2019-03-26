import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 300px;
  height: max-content;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ModalContainer = props => (
    <div>
        <Content>{props.children}</Content>
    </div>
)

export default ModalContainer;