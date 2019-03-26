import * as React from 'react';
import NavbarItem from '../components/Navbar/NavbarItem';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import SearchBar from '../components/Navbar/SearchBar';
import NavbarLogo from '../components/Navbar/NavbarLogo';

const NavBarStory = () => (
  <div>
    <NavbarContainer>
      <SearchBar />
      <NavbarItem />
      <NavbarLogo />
    </NavbarContainer>
  </div>




);

export default NavBarStory;
