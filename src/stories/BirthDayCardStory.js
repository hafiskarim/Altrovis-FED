import * as React from 'react';
import BirthDayCard from '../components/BirthDayCard';
import BirthDayCardContainer from '../components/BirthDayCard/BirthDayCardContainer';
import faker from 'faker';
import moment from 'moment';
import {FaBirthdayCake} from 'react-icons/fa';

const BirthDayCardStory = () => (
  <div style={{margin: '100px'}}>
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
  </div>
);

export default BirthDayCardStory;
