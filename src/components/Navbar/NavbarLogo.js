import * as React from 'react';
import styled from 'styled-components';
import Logo from './header.png'


const Container = styled.div `
   height: auto;
   width: 150px;
   display: flex;
   background: white;
   margin-left: 40px;
   margin-top: 20px;
`

const Images = styled.div `
    height: auto;
`

const NavbarLogo = () => {
    return (
        <Container>
           
            <img src={Logo} />
           
        </Container>
            
    )
}

export default NavbarLogo;