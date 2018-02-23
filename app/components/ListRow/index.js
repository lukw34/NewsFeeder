import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import IconButton from '../../components/IconButton';

import variables from '../../variables';
import LinearGradient from 'react-native-linear-gradient';
import {styles, gradient} from './styles';

class ListRow extends React.Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        const {onPress, item: {title, description, urlToImage, url}} = this.props;
        onPress({
            title,
            description,
            urlToImage,
            url
        });
    }

    render() {
        const {item: {source: {name}, title}} =this.props;
        return (
            <LinearGradient {...gradient} style={styles.listRowContainer}>
                <Text style={styles.listRowContainerText}>{title}</Text>
                <IconButton
                    onPress={this._onPress}
                    title={name}
                    color={variables.accentColor}
                />
            </LinearGradient>
        );
    }
}


ListRow.propTypes = {
    value: PropTypes.shape({}),
    onPress: PropTypes.func
};

export default ListRow;