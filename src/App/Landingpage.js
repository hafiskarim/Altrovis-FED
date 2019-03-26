import React, { Component } from 'react';
import Footer from '../components/Footer';
import FooterItem from '../components/Footer/FooterItem';
import Content from './Content';
import NavbarItem from '../components/Navbar/NavbarItem';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import SearchBar from '../components/Navbar/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Landingpage extends Component {
  render() {
    return (
      <div>
        <NavbarContainer>
          <SearchBar />
          <NavbarItem />
        </NavbarContainer>
        
        <Content />

        <Footer>
          <FooterItem>123-456-789 support@support.co.id</FooterItem>
          <FooterItem>
            Copyright © 2018. Altrovis. All rights reserved
          </FooterItem>
        </Footer>
      </div>
    );
  }
}

export default Landingpage;
