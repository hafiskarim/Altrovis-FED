import * as React from 'react';
import QuotesCard from '../components/QuotesCard';
import QuotesCardContainer from '../components/QuotesCard/QuotesCardContainer';
import faker from 'faker';
import {MdFormatQuote} from 'react-icons/md';

const QuotesCardStory = () => (
    <div style={{margin: '100px'}}>
        <QuotesCardContainer header={{icon: <MdFormatQuote/>, title: 'QUOTE OF THE DAY'}}>
            <QuotesCard quotes={faker.lorem.words(15)}/>
        </QuotesCardContainer>
    </div>
)

export default QuotesCardStory;