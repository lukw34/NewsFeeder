import {LOADER_PUSH, LOADER_CLEAR, LOADER_POP} from '../constants/actions';
import {createReducer} from '../utils/reducers';

const loaderPush = (loaderState = []) => [true, ...loaderState],
    loaderPop = (loaderState = []) => [...loaderState.slice(1, loaderState.length)],
    loaderClear = () => [];


export default createReducer([], {
   LOADER_PUSH: loaderPush,
   LOADER_POP: loaderPop,
   LOADER_CLEAR: loaderClear
});