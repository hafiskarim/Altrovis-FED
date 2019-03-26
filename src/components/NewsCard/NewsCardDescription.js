import * as React from 'react';
import styled from 'styled-components';

const CardDescription = styled.div`
  margin-top: 10px
  width: 200px;
  color: black;
`;

const NewsCardDescription = props => (
  <CardDescription>{props.children}</CardDescription>
);
export default NewsCardDescription;
