import React from 'react';
import {Button, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

import styles from './styles';

const IconButton = ({onPress, title, color, iconName}) => (
    <View style={styles.button}>
        <Button
            icon={<Icon name="kebab-horizontal" size={30} color="#900" />}
            title={title}
            onPress={onPress}
            color={color}
        />
    </View>
);

IconButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    color: PropTypes.string
};

export default IconButton;