import * as React from 'react';
import styled from 'styled-components';
import Logo from './header.png';
import BackgroundLogo from './white.png';

const ContainerSearchBar = styled.div`
  width: max-content;
  height: auto;
  margin-top: 60px;
  color: white;
  border-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  left: 1000px;
`;

const SearchBars = styled.input`
  color: white;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
`;

const BackgroundImages = styled.div`
  height: auto;
  width: 105px;
  background: white;
  margin-left: 40px;
  position: absolute;
  margin-top: -70px;
  z-index: 10;
`;

const Images = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
`;

const SearchBar = () => {
  return (
    <div>
      <ContainerSearchBar>
        <SearchBars placeholder="Pencarian" />
      </ContainerSearchBar>

      <BackgroundImages>
        <Images>
          <img src={Logo} alt="logo" />
        </Images>
      </BackgroundImages>
    </div>
  );
};

export default SearchBar;
