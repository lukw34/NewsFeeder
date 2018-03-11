import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {mapCategories} from '../../utils/mapper';

import Tile from './Tile';
import styles from './styles';

const TileSidebar = ({tiles = [], onPress, activeCategory}) => (
    <View style={styles.tileNavContainer}>
        {tiles.map(tileProps => (<Tile
            key={tileProps}
            isActive={activeCategory === tileProps}
            {...mapCategories(tileProps)}
            onPress={onPress}
        />))}
    </View>
);

TileSidebar.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.string),
    onPress: PropTypes.func,
    activeCategory: PropTypes.string
};

export default TileSidebar;
