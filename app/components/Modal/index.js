import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-native';

const AppModal = ({modalActive, onRequestClose = () => {}, transparent, children}) => (
        <Modal
            visible={modalActive}
            transparent={transparent}
            animationType={'slide'}
            onRequestClose={onRequestClose}
        >
            {children}
        </Modal>
);


AppModal.propTypes = {
    inputProps: PropTypes.object,
    title: PropTypes.string,
    modalActive: PropTypes.bool,
    onRequestClose: PropTypes.func
};

export default AppModal;