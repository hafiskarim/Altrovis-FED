import * as React from 'react';
import styled from 'styled-components';


const Header = styled.div`
  background: #3C5A99;
  overflow: hidden;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  align-content: flex-end;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .08);
  left: 0;
  bottom: 0;
`;

const Item = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;
const Footer = props => {
    return (
       <Header>
            <Item>{props.children}</Item>
       </Header> 
    )
}
export default Footer;