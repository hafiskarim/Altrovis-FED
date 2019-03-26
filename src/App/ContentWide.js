import React, {Component} from 'react';
import styled from 'styled-components';
import NewsCard from './NewsCard';
import NewsCard2 from './NewsCard2';
import Carousels from '../components/Carousel/Carousel';

const ContainerWide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  width: 980px;
`;

const ContainerCard = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

class ContentWide extends Component {
  render() {
    return (
      <ContainerWide>
        <div style={{height: '360px'}}>
          <Carousels />
        </div>
        <ContainerCard>
          <NewsCard />
          <NewsCard2 />
        </ContainerCard>
      </ContainerWide>
    );
  }
}

export default ContentWide;
