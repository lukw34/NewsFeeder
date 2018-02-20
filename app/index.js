import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

import Root from './components/Root';


const App = () => (
    <Provider store={store}>
        <Root/>
    </Provider>
);

export default App;