import * as React from 'react';
import styled from 'styled-components';
import {Avatar} from '@kata-kit/avatar';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DetailBirthDayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Job = styled.div`
  font-size: 12px;
  color: gray;
`;

const Date = styled.div`
  font-size: 12px;
`;

const BirthDayCard = props => {
  return (
    <Content>
      <Avatar
        style={{marginTop: 'auto', marginBottom: 'auto'}}
        src={props.profileImage}
        size={50}
      />
      <DetailBirthDayCard>
        <Name>{props.name}</Name>
        <Job>{props.job}</Job>
        <Date>{props.date}</Date>
      </DetailBirthDayCard>
    </Content>
  );
};

export default BirthDayCard;
