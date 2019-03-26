import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div `
    display: flex;
    flex-direction: row;
    height: 60px;
    width: fit-content;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const DetailCornerCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
`;

const Comment =  styled.div `
    font-size: 15px;
    font-weight: bold;
`;

const Date = styled.div `
    font-size: 12px;
`

const ImageComment = styled.div `
    margin-top: auto;
    margin-bottom: auto;
`

const CornerCard = props => {
    return (
        <Content>
            <ImageComment>{props.commentImage}</ImageComment>
            <DetailCornerCard>
                <Comment>{props.comment}</Comment>
                <Date>{props.date}</Date>
            </DetailCornerCard>
        </Content>
    )
}
export default CornerCard;