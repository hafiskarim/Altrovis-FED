import * as React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 160px; 
  overflow: hidden;
  background: #3C5A99;
`;

const NavbarContainer = (props) => {
    return (
      <div>
        <Container>{props.children}</Container>
      </div>
       
    )
}

export default NavbarContainer;