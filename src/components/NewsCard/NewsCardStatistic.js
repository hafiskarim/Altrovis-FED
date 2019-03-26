import * as React from 'react';
import styled from 'styled-components';
import {GoClock, GoComment} from 'react-icons/go';

const CardStatistic = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
  flex-direction: row;
`;

const DateStatisticWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DateStatistic = styled.div`
  margin-left: 5px;
  font-family: 'Roboto';
`;

const CommentStatisticWrapper = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
`;

const StatisticWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 13px;
`;

const Gradient = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const IconWrapper = styled.div`
  padding-top: auto;
  padding-bottom: auto;
`;

const NewsCardStatistic = props => {
  return (
    <Gradient>
      <CardStatistic>
        <StatisticWrapper>
          <DateStatisticWrapper>
            <IconWrapper>
              <GoClock />
            </IconWrapper>
            <DateStatistic>{props.date}</DateStatistic>
          </DateStatisticWrapper>
          <CommentStatisticWrapper>
            <IconWrapper>
              <GoComment />
            </IconWrapper>
            <DateStatistic>{props.commentCount}</DateStatistic>
          </CommentStatisticWrapper>
        </StatisticWrapper>
      </CardStatistic>
    </Gradient>
  );
};

export default NewsCardStatistic;
