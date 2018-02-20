import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import styles from './styles';

import List from '../../components/List';

const NewsList = ({items, category}) => (
    <View>
        <List items={items}/>
    </View>
);

NewsList.propTypes = {
    items: PropTypes.array,
    category: PropTypes.string
};

export default NewsList;