import React from 'react';
import {Button, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const AppButton = ({onPress, title, color, butonStyles}) => (
    <View style={styles.button}>
        <Button
            title={title}
            onPress={onPress}
            color={color}
        />
    </View>
);

AppButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    color: PropTypes.string
};

export default AppButton;