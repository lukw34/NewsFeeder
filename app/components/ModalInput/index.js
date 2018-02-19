import React from 'react';
import PropTypes from 'prop-types';
import {Modal, View, Text} from 'react-native';

import styles from './styles';
import Input from '../Input';
import Button from '../Button';
import variables from '../../variables';

const ModalInput = ({inputProps, title, modalActive, onRequestClose}) => (
        <Modal
            visible={modalActive}
            transparent
            animationType={'slide'}
            onRequestClose={onRequestClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.content}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <Input {...inputProps} />
                        <Button
                            onPress={onRequestClose}
                            title="Submit"
                            color={variables.accentColor}
                        >
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
);


ModalInput.propTypes = {
    inputProps: PropTypes.object,
    title: PropTypes.string,
    modalActive: PropTypes.bool,
    onRequestClose: PropTypes.func
};

export default ModalInput;