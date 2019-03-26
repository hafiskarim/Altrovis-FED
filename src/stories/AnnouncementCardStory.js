import * as React from 'react';
import AnnouncementCard from '../components/AnnouncementCard';
import AnnouncementCardContainer from '../components/AnnouncementCard/AnnouncementCardContainer';
import faker from 'faker';
import {FaBullhorn} from 'react-icons/fa';
import {TiMediaRecord}from 'react-icons/ti';

const AnnouncementCardStory = () => (
    <div style={{margin: '100px'}}>
        <AnnouncementCardContainer header={{icon: <FaBullhorn/>, title: 'ANNOUNCEMENT'}}>
            {[1,2,3,4,5,6].map(id => (
                <AnnouncementCard
                    imageCircle={<TiMediaRecord style={{color:'blue'}} />}
                    comment={faker.lorem.words(9)}
                />
            ))}
        </AnnouncementCardContainer>
    </div>
)

export default AnnouncementCardStory;