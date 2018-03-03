import Fetch from '../utils/Fetch';
import {API_KEY, BASE_URL} from '../constants';

import {pushLoader, popLoader} from './loader.actions';
import {onRequestError, onRequestSuccess, onRequestStart} from './list.actions';

const buildQueryFromConfig = config => `?apikey=${API_KEY}${Object.keys(config)
        .reduce((last, key) => (config[key] && `&${key}=${config[key]}${last}`) || last, '')}`,
    fetchNews = (resource, config = {}) => dispatch => {
        dispatch(pushLoader());
        dispatch(onRequestStart());
        return Fetch.fetching(`${BASE_URL}${resource}${buildQueryFromConfig(config)}`)
            .then(({body: {articles = []} = {}}) => {
                dispatch(onRequestSuccess(articles, config.category || resource, config.country));
                setTimeout(() => {
                    dispatch(popLoader());
                }, 500);
            }).catch(err => {
                dispatch(onRequestError(err));
                setTimeout(() => {
                    dispatch(popLoader());
                }, 500);
            });
    },
    fetchTopHeadlinesForCountry = country => fetchNews('top-headlines', {
        country
    }),
    fetchByCategory = (country, category) => fetchNews('top-headlines', {
        country,
        category
    });

export {
    fetchTopHeadlinesForCountry,
    fetchByCategory
}