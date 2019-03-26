import * as React from 'react';
import NewsCard from '../components/NewsCard';
import NewsCardContent from '../components/NewsCard/NewsCardContent';
import NewsCardStatistic from '../components/NewsCard/NewsCardStatistic';
import NewsCardDescription from '../components/NewsCard/NewsCardDescription';
import NewsCardContainer from '../components/NewsCard/NewsCardContainer';
import {FaNewspaper} from 'react-icons/fa';
import faker from 'faker';
import moment from 'moment';

const NewsCards = () => {
  return (
    <NewsCardContainer header={{icon: <FaNewspaper />, title: 'NEWS'}}>
      {[1, 2, 3, 4, 5, 6].map(id => {
        return (
          <NewsCard key={id}>
            <NewsCardContent
              background={`${faker.image.nature(
                280,
                210
              )}?${faker.random.uuid()}`}>
              <NewsCardStatistic
                date={moment(faker.date.past()).format('DD MMMM YYYY')}
                commentCount={faker.random.number(100)}
              />
            </NewsCardContent>
            <NewsCardDescription>{faker.lorem.words(15)}</NewsCardDescription>
          </NewsCard>
        );
      })}
    </NewsCardContainer>
  );
};
export default NewsCards;
