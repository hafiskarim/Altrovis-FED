import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: max-content;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
`;

const HeaderText = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;

const AvatarWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const VideoCardContainer = props => (
  <div>
    <Header>
      <AvatarWrapper>{props.header.icon}</AvatarWrapper>
      <AvatarWrapper>
        <HeaderText>{props.header.title}</HeaderText>
      </AvatarWrapper>
    </Header>
    <Container>{props.children}</Container>
  </div>
);

const VideoThumbnail = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

const VideoCardWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const VideoCardDescription = styled.p`
  width: 220px;
`;

const Separator = styled.div`
  opacity: 1;
  height: 0.1rem;
  width: 100%;
  clear: both;
  background: rgb(230, 230, 230);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const VideoCard = props => (
  <div style={{width: '300px', height: 'max-content'}}>
    <Separator />
    <VideoCardWrapper>
      <VideoThumbnail style={{background: `url(${props.thumbnail})`}} />
      <VideoCardDescription>{props.description}</VideoCardDescription>
    </VideoCardWrapper>
  </div>
);
