import * as React from 'react';
import {VideoCardContainer, VideoCard} from '../components/VideoCard/index';
import faker from 'faker';
import {MdVideoLibrary} from 'react-icons/md';
import CornerCard from '../components/CornerCard';
import CornerCardContainer from '../components/CornerCard/CornerCardContainer';
import moment from 'moment';
import {FaCoffee} from 'react-icons/fa';
import {GoComment} from 'react-icons/go';
import styled from 'styled-components';
import BirthDayCard from '../components/BirthDayCard';
import BirthDayCardContainer from '../components/BirthDayCard/BirthDayCardContainer';
import {FaBirthdayCake} from 'react-icons/fa';

const WrapperNewsCard2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const NewsCard2 = () => {
  return (
    <WrapperNewsCard2>
      <VideoCardContainer header={{icon: <MdVideoLibrary />, title: 'VIDEO'}}>
        <iframe
          src="https://www.youtube.com/embed/B2odicc6f2Y?autohide=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        />
        <VideoCard
          thumbnail={`${faker.image.city(70, 70)}?${faker.random.uuid()}`}
          description={faker.lorem.words(10)}
        />
        <VideoCard
          thumbnail={`${faker.image.city(70, 70)}?${faker.random.uuid()}`}
          description={faker.lorem.words(10)}
        />
      </VideoCardContainer>

      <CornerCardContainer
        header={{icon: <FaCoffee />, title: 'COFFEE CORNER'}}>
        {[1, 2, 3, 4, 5, 6].map(id => (
          <CornerCard
            commentImage={<GoComment />}
            comment={faker.lorem.words(8)}
            date={moment(faker.date.past()).format('DD MMMM YYYY')}
          />
        ))}
      </CornerCardContainer>

      <BirthDayCardContainer
        header={{icon: <FaBirthdayCake />, title: 'MANAGEMENT BIRTHDAY'}}>
        {[1, 2, 3, 4, 5, 6].map(id => (
          <BirthDayCard
            profileImage={`${faker.image.avatar(70)}?${faker.random.uuid()}`}
            job={faker.name.jobTitle()}
            date={moment(faker.date.past()).format('DD MMMM YYYY')}
            name={faker.name.findName()}
          />
        ))}
      </BirthDayCardContainer>
    </WrapperNewsCard2>
  );
};

export default NewsCard2;
