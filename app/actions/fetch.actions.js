import Fetch from '../utils/Fetch';
import {API_KEY, BASE_URL} from '../constants';

import {pushLoader, popLoader} from './loader.actions';
import {onRequestError, onRequestSuccess, onRequestStart} from './list.actions';

const buildQueryFromConfig = config => `?apikey=${API_KEY}${Object.keys(config)
        .reduce((last, key) => (config[key] && `&${key}=${config[key]}${last}`) || last, '')}`,
    fetchNews = (resource, config = {}) => dispatch => {
        dispatch(pushLoader());
        dispatch(onRequestStart());
        return Fetch.fetching(`${BASE_URL}${resource}${buildQueryFromConfig({...config, pageSize: 30})}`)
            .then(({body: {articles = []} = {}}) => {
                dispatch(onRequestSuccess(articles, config.category || resource, config.country));
                setTimeout(() => {
                    dispatch(popLoader());
                }, 200);
                return Promise.resolve();
            }).catch(err => {
                dispatch(onRequestError(err));
                setTimeout(() => {
                    dispatch(popLoader());
                }, 200);
                return Promise.reject(err);
            });
    },
    fetchTopHeadlinesForCountry = country => fetchNews('top-headlines', {
        country
    }),
    fetchByCategory = (country, category) => fetchNews('top-headlines', {
        country,
        category
    }),
    fetchWithQuery = q => fetchNews('everything', {
        q,
        sortBy: 'publishedAt'
    });

export {
    fetchTopHeadlinesForCountry,
    fetchByCategory,
    fetchWithQuery
};