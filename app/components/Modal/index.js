import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-native';

const AppModal = ({modalActive = false, onRequestClose = () => {}, transparent, animationType = 'slide', children}) => (
    <Modal
        visible={modalActive}
        transparent={transparent}
        animationType={animationType}
        onRequestClose={onRequestClose}
    >
        {children}
    </Modal>
);


AppModal.propTypes = {
    transparent: PropTypes.bool,
    modalActive: PropTypes.bool,
    onRequestClose: PropTypes.func,
    animationType: PropTypes.string,
    children: PropTypes.element
};


export default AppModal;