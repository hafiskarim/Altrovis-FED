import * as React from 'react';
import styled from 'styled-components';

const Gradient = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.6) 80%,
    rgba(255, 255, 255, 0.8) 100%
  );
`;

const CardDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ProfileName = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
`;

const ProfileJob = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  background: white;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
  box-shadow: -2px 2px 10px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  margin-top: -35px;
`;

const ProfileCardDetail = props => {
  return (
    <Gradient>
      <CardDetail>
        <ProfileWrapper>
          <ProfileName>{props.name}</ProfileName>
          <ProfileJob>{props.job}</ProfileJob>
        </ProfileWrapper>
      </CardDetail>
    </Gradient>
  );
};

export default ProfileCardDetail;
