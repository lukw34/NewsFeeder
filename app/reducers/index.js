import {combineReducers} from 'redux';
import loader from './loader.reducer';
import request from './request.reducer';

export default combineReducers({
    loader,
    request
});