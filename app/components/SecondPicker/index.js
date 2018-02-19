import React from 'react';
import {Picker, View} from 'react-native';
import PropTypes from 'prop-types';

const SecondPicker = ({items = [], onChange, selected = items[0] || 0}) => (
    <View>
    {items.length > 0 && 
    <Picker 
        selectedValue={selected}
        onValueChange={onChange}
    >
        {items.map(({value, label})=> <Picker.Item key={label} label={`${label} s`} value={value} />)} 
    </Picker>}
    </View>
)

SecondPicker.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })),
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.number
}

export default SecondPicker;