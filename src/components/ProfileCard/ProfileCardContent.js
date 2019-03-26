import * as React from 'react';
import styled from 'styled-components';

const PrflCardContents = styled.div`
  overflow: hidden;
  height: 275px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  z-index: -1;
`;

const ProfileCardContents = props => {
  return (
    <PrflCardContents
      style={{
        background: `url(${props.background})`,
        borderRadius: '20px 20px 0 0',
      }}>
      {props.children}
    </PrflCardContents>
  );
};

export default ProfileCardContents;
