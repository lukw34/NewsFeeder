import React from 'react';
import {ScrollView, View, Text, Button, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

import Modal from '../index';
import styles from './styles';
import variables from '../../../variables';

const ModalInfo = ({modalActive, info: {description, title, url, urlToImage: uri}, onRequestClose, onSubmitPress}) => (
    <Modal
        modalActive={modalActive}
        transparent={true}
        onRequestClose={onRequestClose}
        animationType={'fade'}
    >
        <ScrollView style={styles.infoModalContainer} contentContainerStyle={styles.infoModalContainerContent}>
            <TouchableHighlight onPress={onRequestClose} style={styles.infoModalContentClose}>
                <Icon name="x" size={40} color={variables.divider}/>
            </TouchableHighlight>
            <Text style={styles.infoModalContentTitle}>{title}</Text>
            {uri && <Image
                style={styles.infoModalContentImage}
                source={{uri}}/>}
            <Text style={styles.infoModalContentDescription}>{description}</Text>
            <View style={styles.infoModalContentButton}>
                {url && <Button
                    onPress={() => onSubmitPress({url, title})}
                    title="See article"
                />}
            </View>
        </ScrollView>
    </Modal>
);

ModalInfo.propTypes = {
    modalActive: PropTypes.bool
};

export default ModalInfo;