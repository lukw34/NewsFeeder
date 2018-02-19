import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ListRow = ({value}) => (
    <View>
        <Text>{value}</Text>
    </View>
);


ListRow.propTypes = {
    value: PropTypes.string
};

export default ListRow;