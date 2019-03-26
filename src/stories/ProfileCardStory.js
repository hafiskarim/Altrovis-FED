import * as React from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileCardContent from '../components/ProfileCard/ProfileCardContent';
import ProfileCardDescription from '../components/ProfileCard/ProfileCardDescription';
import ProfileCardDetail from '../components/ProfileCard/ProfileCardDetail';
import faker from 'faker';

const ProfileCardStory = () => (
  <div style={{margin: '200px'}}>
    <ProfileCard>
      <ProfileCardContent
        background={`${faker.image.people(300)}?${faker.random.uuid()}`}
      />
      <ProfileCardDetail
        name={faker.name.findName()}
        job={faker.name.jobTitle()}
      />
      <ProfileCardDescription>{faker.lorem.words(50)}</ProfileCardDescription>
      <ProfileCardDescription>{faker.lorem.words(50)}</ProfileCardDescription>
    </ProfileCard>
  </div>
);

export default ProfileCardStory;
