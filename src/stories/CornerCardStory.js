import * as React from 'react';
import CornerCard from '../components/CornerCard';
import CornerCardContainer from '../components/CornerCard/CornerCardContainer';
import faker from 'faker';
import moment from 'moment';
import {FaCoffee} from 'react-icons/fa';
import {GoComment} from 'react-icons/go';

const CornerCardStory = () => (
  <div style={{margin: '100px'}}>
    <CornerCardContainer header={{icon: <FaCoffee />, title: 'COFFEE CORNER'}}>
      {[1, 2, 3, 4, 5, 6].map(id => (
        <CornerCard
          commentImage={<GoComment />}
          comment={faker.lorem.words(8)}
          date={moment(faker.date.past()).format('DD MMMM YYYY')}
        />
      ))}
    </CornerCardContainer>
  </div>
);

export default CornerCardStory;
