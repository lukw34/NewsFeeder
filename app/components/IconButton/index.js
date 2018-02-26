import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import variables from '../../variables';
import styles from './styles';

const IconButton = ({onPress, title, iconName}) => (
    <TouchableHighlight style={styles.iconButton} onPress={onPress}>
        <View style={styles.iconButtonContainer}>
            <Text style={styles.iconButtonContainerTitle}>{title.toUpperCase()} </Text>
            <Icon
                style={styles.iconButtonContainerIcon}
                name={iconName}
                size={45}
                color={variables.text}
            />
        </View>
    </TouchableHighlight>
);

IconButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    color: PropTypes.string
};

export default IconButton;