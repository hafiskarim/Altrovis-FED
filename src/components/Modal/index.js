import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div` 
    width: 753px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    background: white;
`;

const Menu = styled.div`
    width: 100%;
    height: 20px;
    font-weight: bold;
    margin-left: 70px;
    color: black;
`

const SubMenu = styled.div`
    width: 100%;
    height: 20px;
    font-weight: 400;
    color: black;
    margin-left: 70px;
`

const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    padding-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    font-size: 13px;
`

const SubMenuWrapper = styled.div`
    width: 100%;
    display: flex;
    padding-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    font-size: 13px;
`

const Modal = () => {
    return (
        <Content>
            <MenuWrapper>
                    <Menu>FIFGROUP APPLICATION</Menu>
                    <Menu>HO APPLICATION</Menu>
                    <Menu>OFFICE APPLICATION</Menu>
            </MenuWrapper>

            <SubMenuWrapper>
                    <SubMenu>Application 1</SubMenu>
                    <SubMenu>Application 1</SubMenu>
                    <SubMenu>Application 1</SubMenu>
            </SubMenuWrapper>

            <SubMenuWrapper>
                    <SubMenu>Application 2</SubMenu>
                    <SubMenu>Application 2</SubMenu>
                    <SubMenu>Application 2</SubMenu>
            </SubMenuWrapper>

            <SubMenuWrapper>
                    <SubMenu>Application 3</SubMenu>
                    <SubMenu>Application 3</SubMenu>
                    <SubMenu>Application 3</SubMenu>
            </SubMenuWrapper>

            <SubMenuWrapper>
                    <SubMenu>Application 4</SubMenu>
                    <SubMenu>Application 4</SubMenu>
                    <SubMenu>Application 4</SubMenu>
            </SubMenuWrapper>

            <SubMenuWrapper>
                    <SubMenu>Application 5</SubMenu>
                    <SubMenu>Application 5</SubMenu>
                    <SubMenu>Application 5</SubMenu>
            </SubMenuWrapper>
        </Content>
    )
}
export default Modal;