import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const EmptyList = () => (
    <View style={styles.emptyListContainer}>
        <Icon
            name='ban'
            color='white'
            size={100}
        />
        <Text style={styles.emptyListText}>{'No news for you'.toUpperCase()}</Text>
    </View>
);

export default EmptyList;