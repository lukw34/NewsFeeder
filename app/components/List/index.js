import React from 'react';
import {FlatList, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import ListRow from '../ListRow';


const List = ({items = []}) => (
    <View>
        <FlatList
            data={items.map((value, index) => ({value, index, key: `key-${index}`}))}
            renderItem={({item}) => <Text>{item.value.title}</Text>}
        />
    </View>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};

export default List