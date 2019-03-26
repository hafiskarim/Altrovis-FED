import * as React from 'react';
import styled from 'styled-components';

const PrflCardDescription =  styled.p `
    margin-top: 10px;
    width: 309px;
    color: black;
    padding-left: 20px;
    padding-right: 20px;
`

const ProfileCardDescription =  props => (
    <PrflCardDescription>
        {props.children}
    </PrflCardDescription>
)

export default ProfileCardDescription;