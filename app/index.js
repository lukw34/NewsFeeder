import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Navigator from './components/Navigator';


const App = () => (
    <Provider store={store}>
        <Navigator scenes={['home']}/>
    </Provider>
);

export default App;