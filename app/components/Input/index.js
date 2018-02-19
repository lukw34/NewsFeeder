import React from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

import style from './style.js'

const Input = ({value, onchange}) => (
    <View style={style.mainInput}>
        <TextInput
            style={style.input}
            onChangeText={onchange}
            value={value}
        />
    </View>);

Input.propTypes = {
    value: PropTypes.string,
    onchange: PropTypes.func
};

export default Input;
