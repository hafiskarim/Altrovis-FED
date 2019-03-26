import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const ContainerItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  flex-direction: row;
  padding-right: 50px;
  padding-bottom: 20px;
`;

const Item = styled.button`
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 14px 16px;
  text-decoration: none;
  background-color: inherit;
  border: none;
  outline: none;
  font-weight: bold;
`;

const ContainerModal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  margin-top: -30px;
  z-index: 10;
  position: absolute;
`;



class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalSubMenu: false
    }
  }

  toggleModal = () => {
    this.setState({ modalSubMenu: !this.state.modalSubMenu });
  }


  render() {
    return (
      <div>
        <ContainerItem>
          <Item>HOME</Item>
          <Item onPointerEnter={this.toggleModal} onPointerLeave={this.toggleModal}>APPLICATIONS</Item>
          <Item>REPORTS</Item>
          <Item>NEWS</Item>
          <Item>PORTAL DEPARTMENT</Item>
          <Item>GALLERY</Item>
        </ContainerItem>
        <ContainerModal>
          {this.state.modalSubMenu ? <Modal /> : null}
        </ContainerModal>

      </div>

    )
  }
}

export default NavbarItem;