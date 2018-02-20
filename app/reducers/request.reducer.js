import {REQUEST_FAILURE, REQUEST_SUCCESS, REQUEST_INIT} from '../constants/actions';
import {createReducer} from '../utils/reducers';

const initState = {
        data: [],
        category: '',
        country: '',
        err: null
    },
    onRequestInit = () => ({...initState}),
    onRequestSuccess = (requestState = {}, {data, country, category}) => ({
        ...requestState,
        data,
        country,
        category
    }),
    onRequestError = () => (requestState = {}, {err}) => ({
        ...requestState,
        err
    });


export default createReducer(initState, {
    REQUEST_FAILURE: onRequestError,
    REQUEST_SUCCESS: onRequestSuccess,
    REQUEST_INIT: onRequestInit
});