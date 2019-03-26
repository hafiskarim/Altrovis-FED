import * as React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';
import ProfileCardContent from '../components/ProfileCard/ProfileCardContent';
import ProfileCardDescription from '../components/ProfileCard/ProfileCardDescription';
import ProfileCardDetail from '../components/ProfileCard/ProfileCardDetail';
import QuotesCard from '../components/QuotesCard';
import QuotesCardContainer from '../components/QuotesCard/QuotesCardContainer';
import {MdFormatQuote} from 'react-icons/md';
import Calendars from '../components/Calendar';
import CalendarContainer from '../components/Calendar/CalendarContainer';
import {FaCalendar} from 'react-icons/fa';
import AnnouncementCard from '../components/AnnouncementCard';
import AnnouncementCardContainer from '../components/AnnouncementCard/AnnouncementCardContainer';
import {FaBullhorn} from 'react-icons/fa';
import {TiMediaRecord} from 'react-icons/ti';

import faker from 'faker';

const ContainerShort = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 20px;
  width: 300px;
`;

const ContentShort = () => {
  return (
    <ContainerShort>
      <ProfileCard>
        <ProfileCardContent
          background={`${faker.image.people(300)}?${faker.random.uuid()}`}
        />
        <ProfileCardDetail
          name={faker.name.findName()}
          job={faker.name.jobTitle()}
        />
        <ProfileCardDescription>{faker.lorem.words(25)}</ProfileCardDescription>
        <ProfileCardDescription>{faker.lorem.words(25)}</ProfileCardDescription>
      </ProfileCard>
      <QuotesCardContainer
        header={{icon: <MdFormatQuote />, title: 'QUOTE OF THE DAY'}}>
        <QuotesCard quotes={faker.lorem.words(15)} />
      </QuotesCardContainer>

      <CalendarContainer
        header={{icon: <FaCalendar />, title: 'CORPORATE CALENDAR'}}>
        <Calendars />
      </CalendarContainer>

      <AnnouncementCardContainer
        header={{icon: <FaBullhorn />, title: 'ANNOUNCEMENT'}}>
        {[1, 2, 3, 4, 5, 6].map(id => (
          <AnnouncementCard
            imageCircle={<TiMediaRecord style={{color: 'blue'}} />}
            comment={faker.lorem.words(9)}
          />
        ))}
      </AnnouncementCardContainer>
    </ContainerShort>
  );
};

export default ContentShort;
