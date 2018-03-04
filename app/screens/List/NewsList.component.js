import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import List from '../../components/List';
import TileSidebar from '../../components/TileSidebar';
import EmptyList from '../../components/EmptyList';

const NewsList = ({items, showTiles = true, category, style, navigateTo, onRefresh, activeCategory, onTilePress}) => (
    <View style={[style]}>
        {showTiles && <TileSidebar
            onPress={onTilePress}
            activeCategory={activeCategory}
            tiles={['top-headlines', 'business', 'health', 'science', 'technology']}/>}
        {items.length > 0 ? <List
            onRefresh={onRefresh}
            items={items}
            navigateTo={navigateTo}
        /> : <EmptyList/>}
    </View>
);

NewsList.propTypes = {
    onRefresh: PropTypes.func,
    style: PropTypes.any,
    items: PropTypes.array,
    category: PropTypes.string,
    navigateTo: PropTypes.func,
    activeCategory: PropTypes.string,
    onTilePress: PropTypes.func,
    showTiles: PropTypes.bool
};

export default NewsList;