import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import styles from './styles';

import List from '../../components/List';

const NewsList = ({items, category, style, navigateTo}) => (
    <View style={[style]}>
        <List items={items} navigateTo={navigateTo}/>
    </View>
);

NewsList.propTypes = {
    items: PropTypes.array,
    category: PropTypes.string,
    navigateTo: PropTypes.func
};

export default NewsList;