import * as React from 'react';
import Modal from '../components/Modal';
import ModalContainer from '../components/Modal/ModalContainer';
import faker from 'faker';

const ModalStory = () => (
    <div style={{margin: '100px'}}>
        <ModalContainer>
            <Modal />
        </ModalContainer>
    </div>
)
export default ModalStory;