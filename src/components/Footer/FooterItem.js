import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    background: #484848;
    overflow: hidden;
    width: 100%;
    height: 151px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .08);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const FooterContainer = props => <Content>{props.children}</Content>
export default FooterContainer;