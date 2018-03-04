import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import Modal from '../index';
import Loader from '../../Loader';
import styles from './styles';

const ModalLoader = ({modalActive}) => (
    <Modal
        modalActive={modalActive}
        transparent={false}
    >
        <View style={styles.loaderModalContainer}>
            <View style={styles.loaderModalContent}>
                <Loader ballsNumber={5}/>
                <Text>We are fetching some interesting news. </Text>
            </View>
        </View>
    </Modal>
);

ModalLoader.propTypes = {
    modalActive: PropTypes.bool
};

export default ModalLoader;