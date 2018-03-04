import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Modal from '../index';
import styles from './styles';


const ModalNetInfo = ({modalActive}) => (
    <Modal
        modalActive={modalActive}
        transparent={false}
    >
        <View style={styles.netInfoContainer}>
            <Icon
                name='signal-wifi-off'
                size={200}
                style={styles.netInfoIcon}
                color="white"
            />
            <Text style={styles.netInfoText}>{'No internet connection'.toUpperCase()}</Text>
        </View>
    </Modal>
);

ModalNetInfo.propTypes = {
    modalActive: PropTypes.bool
};

export default ModalNetInfo;