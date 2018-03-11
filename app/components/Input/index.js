import React from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Input = ({value, onchange = () => {}}) => (
    <View style={style.mainInput}>
        <TextInput
            style={style.input}
            onChangeText={onchange}
            value={value}
        />
    </View>);

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func
};

Input.defaultProps = {
    onchange: () => {}
};

export default Input;
