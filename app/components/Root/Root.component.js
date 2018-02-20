import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import Navigator from '../Navigator';
import ModalLoader from '../Modal/Loader';


const Root = ({isLoader = false}) => (
    <View style={{flex: 1}}>
        <Navigator
            scenes={['home', 'newsList']}
        />
        <ModalLoader
            modalActive={isLoader}
        />
    </View>
);


Root.propTypes = {
    isLoader: PropTypes.bool
};

export default Root;