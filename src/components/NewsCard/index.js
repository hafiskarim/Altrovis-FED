import * as React from 'react';
import styled from 'styled-components';

const NewsCardWrapper = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
`;

const NewsCard = props => {
  return (
    <NewsCardWrapper style={{background: `url(${props.background})`}}>
      {props.children}
    </NewsCardWrapper>
  );
};

export default NewsCard;
