import React from 'react';
import {ScrollView, View, Text, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

import Modal from '../index';
import variables from '../../../variables';
import IconButton from '../../IconButton';
import withLoader from '../../../HOC/withLoader';

import styles from './styles';

const ModalInfo = ({modalActive, info: {description, title, url, urlToImage: uri, source}, onRequestClose, onSubmitPress}) => {
    const WrappedImage = withLoader(Image, {
        style: styles.infoModalContentImage,
        source: {uri}
    });

    return (
        <Modal
            modalActive={modalActive}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            <ScrollView style={styles.infoModalContainer} contentContainerStyle={styles.infoModalContainerContent}>
                <TouchableHighlight
                    onPress={onRequestClose}
                    style={styles.infoModalContentClose}
                    underlayColor={null}
                >
                    <Icon name="x" size={40} color={variables.divider} />
                </TouchableHighlight>
                <Text style={styles.infoModalContentTitle}>{title}</Text>
                {uri && <WrappedImage />}
                {description && <Text style={styles.infoModalContentDescription}>{description.toLocaleString()}</Text>}
                <View style={styles.infoModalContentButton}>
                    {url && <IconButton
                        onPress={() => onSubmitPress({url, title, source})}
                        title="Read article"
                        iconName="chrome-reader-mode"
                    />}
                </View>
            </ScrollView>
        </Modal>
    );
};

ModalInfo.propTypes = {
    modalActive: PropTypes.bool,
    info: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        urlToImage: PropTypes.string,
        source: PropTypes.string

    }),
    onSubmitPress: PropTypes.func,
    onRequestClose: PropTypes.func
};

ModalInfo.defaultProps = {
    modalActive: false,
    info : {},
    onRequestClose: () => {},
    onSubmitPress: () => {}
};

export default ModalInfo;