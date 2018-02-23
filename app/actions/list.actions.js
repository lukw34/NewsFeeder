import {REQUEST_SUCCESS, REQUEST_FAILURE, REQUEST_INIT} from '../constants/actions';

const onRequestSuccess = (data, category, country) => ({
        data,
        category,
        country,
        type: REQUEST_SUCCESS
    }),
    onRequestStart = () => ({
        type: REQUEST_INIT
    }),
    onRequestError = err => ({
        type: REQUEST_FAILURE,
        err
    });


export {
    onRequestStart,
    onRequestSuccess,
    onRequestError
};


