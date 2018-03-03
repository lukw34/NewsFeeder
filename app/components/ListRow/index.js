import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import IconButton from '../../components/IconButton';

import variables from '../../variables';
import styles from './styles';

class ListRow extends React.Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        const {onPress, item: {title, description, urlToImage, url, source: {name: source}}} = this.props;
        onPress({
            title,
            description,
            urlToImage,
            url,
            source
        });
    }

    render() {
        const {item: {source: {name}, title}} = this.props;
        return (
            <TouchableHighlight
                style={styles.listRowContainerButton}
                underlayColor={variables.primary}
                activeOpacity={0.9}
                onPress={this._onPress}
            >
                <View style={styles.listRowContainer}>
                    <Text style={styles.listRowContainerText}>{title}</Text>
                    <Text style={styles.listRowContainerSource}>{name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}


ListRow.propTypes = {
    value: PropTypes.shape({}),
    onPress: PropTypes.func
};

export default ListRow;