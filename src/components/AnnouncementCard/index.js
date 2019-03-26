import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div `
    display: flex;
    flex-direction: row;
    height: 50px;
    width: fit-content;
    margin-bottom: 10px;
`;

const DetailAnnouncementCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 10px;
`;

const Comment =  styled.div `
    font-size: 15px;
    font-weight: bold;
`;

const ImageCircle = styled.div `
    margin-bottom: auto;
`

const AnnouncementCard = props => {
    return (
        <Content>
            <ImageCircle>{props.imageCircle}</ImageCircle>
            <DetailAnnouncementCard>
                <Comment>{props.comment}</Comment>
            </DetailAnnouncementCard>
        </Content>
    )
}

export default AnnouncementCard;