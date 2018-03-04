import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import variables from '../../variables';
import styles from './styles';

class ListRow extends React.PureComponent {
   static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        urlToImage: PropTypes.string,
        source: PropTypes.shape({
            name: PropTypes.string
        }),
        onPress: PropTypes.func
    };

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        const {onPress, title, description, urlToImage, url, source: {name: source}} = this.props;
        onPress({
            title,
            description,
            urlToImage,
            url,
            source
        });
    }

    render() {
        const {source: {name}, title} = this.props;
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

export default ListRow;