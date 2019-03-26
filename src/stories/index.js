import React from 'react';
import {storiesOf} from '@storybook/react';
import App from '../App';
import CalendarStory from './CalendarStory';
import NavBarStory from './NavBarStory';
import NewsCardStory from './NewsCardStory';
import Carousel from './Carousel';
import ProfileCards from './ProfileCardStory';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import BirthDayCardStory from './BirthDayCardStory';
import VideoCardStory from './VideoCardStory';
import CornerCardStory from './CornerCardStory';
import AnnouncementCardStory from './AnnouncementCardStory';
import QuotesCardStory from './QuotesCardStory';
import ModalStory from './ModalStory';
import FooterStory from './FooterStory';

storiesOf('Components', module)
  .add('NavbarStory', () => <NavBarStory />)
  .add('Calendar', () => <CalendarStory />)
  .add('News Cards', () => <NewsCardStory />)
  .add('Carousel', () => <Carousel />)
  .add('ProfileCards', () => <ProfileCards />)
  .add('BirthDayCardStory', () => <BirthDayCardStory />)
  .add('VideoCardStory', () => <VideoCardStory />)
  .add('Coffee Corner', () => <CornerCardStory />)
  .add('Announcement', () => <AnnouncementCardStory />)
  .add('Quotes', () => <QuotesCardStory />)
  .add('Modal', () => <ModalStory/>)
  .add ('Footer', () => <FooterStory/>)
storiesOf('App', module).add('App Default', () => <App />);
