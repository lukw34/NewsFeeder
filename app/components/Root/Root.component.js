import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import Navigator from '../Navigator';
import ModalLoader from '../Modal/Loader';
import ModalNetInfo from '../Modal/NetInfoStatus';

import styles from './styles';

const Root = ({isLoader = false, isInternetAvailable = true}) => (
    <View style={styles.rootContainer}>
        <Navigator
            scenes={['home', 'newsList', 'searchList', 'news', 'error']}
        />
        <ModalLoader
            modalActive={isLoader}
        />
        <ModalNetInfo
            modalActive={!isInternetAvailable}
        />
    </View>
);


Root.propTypes = {
    isLoader: PropTypes.bool,
    isInternetAvailable: PropTypes.bool
};

export default Root;