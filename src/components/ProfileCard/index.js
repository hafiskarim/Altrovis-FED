import * as React from 'react';
import styled from 'styled-components';

const ProfileCardWrapper = styled.div`
  width: 300px;
  height: max-content;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;

const ProfileCard = props => {
  return <ProfileCardWrapper>{props.children}</ProfileCardWrapper>;
};

export default ProfileCard;
