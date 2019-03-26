import * as React from 'react';
import {VideoCardContainer, VideoCard} from '../components/VideoCard/index';
import faker from 'faker';
import {MdVideoLibrary} from 'react-icons/md';

const VideoCardStory = () => (
  <div style={{margin: '400px'}}>
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
  </div>
);

export default VideoCardStory;
