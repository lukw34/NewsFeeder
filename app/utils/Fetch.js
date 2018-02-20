/**
 * @namespace Utils
 */

import QueryURL from './QueryURL';

const queryURL = new QueryURL();

/**
 * Class use to wrapp fetch.
 * @memberOf Utils
 */
class Fetch {
    /**
     * Format fetch response header
     * @param {object} headers List of headers from fetch
     * @returns {object} List of repsonse headers
     * @private
     */
    static getHeaders(headers) {
        const responseHeaders = {};
        headers.forEach((val, key) => {
            let value;
            try {
                value = JSON.parse(val);
            } catch (e) {
                value = val;
            } finally {
                responseHeaders[key] = value;
            }
        });
        return responseHeaders;
    }

    /**
     * Use to handle fetch response.
     * @param {object} response Response object.
     * @returns {Promise} Result.
     * @private
     */
    static handleResponse(response) {
        const statusCode = response.status,
            headers = this.getHeaders(response.headers);
        return new Promise((resolve, reject) => {
            response.json()
                .then(body => {
                    if (response.ok) {
                        resolve({
                            body,
                            statusCode,
                            headers
                        });
                    } else {
                        reject({
                            code: statusCode || 500,
                            message: body.message || 'Error occured'
                        });
                    }
                })
                .catch(() => {
                    if (response.ok) {
                        resolve({
                            body: '',
                            statusCode,
                            headers
                        });
                    } else {
                        reject({
                            code: statusCode || 500,
                            message: response.statusText || 'Error occured'
                        });
                    }
                });
        });
    }

    /**
     * Handle request error
     * @param {object} err Error object
     * @returns {Promise} Result
     */
    static handleError(err) {
        return new Promise((resolve, reject) => {
            reject({
                code: err.code,
                message: err.statusText || err.message
            });
        });
    }

    /**
     * Send request
     * @param {string} URL Resource url
     * @param {Object | undefined} requestSettings Settings for request.
     * @returns {Promise.<T>|*} Result
     */
    static fetching(URL = '', requestSettings = {
        method: 'GET'
    }) {
        const headers = {...requestSettings.headers, pragma: 'no-cache', 'cache-control': 'no-cache'};
        return fetch(URL, {...requestSettings, credentials: 'same-origin', headers})
            .then(response => this.handleResponse(response))
            .catch(err => this.handleError(err));
    }

    /**
     * Send request GET /resources
     * @param {string} collection Collection name.
     * @param {object} config Request config object.
     * @returns {Promise.<T>|*} Result.
     */
    static getList(collection, config = {}) {
        const
            defautConfig = {
                limit: 10,
                offset: 0,
                order: [],
                fields: []
            },
            URL = queryURL.getListURL(collection, {...defautConfig, ...config});
        return this.fetching(URL);
    }

    /**
     * Send request GET /media
     * @param {string} path Media path.
     * @param {object} config Request config object.
     * @returns {Promise.<T>|*} Result.
     */
    static getMediaList(path, params = {}) {
        const
            defautConfig = {
                order: []
            },
            URL = queryURL.getMediaListURL(`media${path}`, {...defautConfig, ...params});
        return this.fetching(URL);
    }

    /**
     * Send request DELETE /realativePath
     * @param {string} relativePath Realtive path name.
     * @returns {Promise.<T>|*} Result
     */

    static remove(relativePath, body, headers) {
        const URL = queryURL.getURL(relativePath);
        return Fetch.fetching(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)

        });
    }

    /**
     * Send request GET /relativePath
     * @param {string} relativePath Relative path name.
     * @returns {Promise.<T>|*} Result
     */
    static get(relativePath) {
        const URL = queryURL.getURL(relativePath);
        return Fetch.fetching(URL);
    }

    /**
     * Send multiple request DELETE /module/id
     * @param {string} module Module name.
     * @param {Array} items List of items
     * @returns {Promise.<T>|*} Result
     */
    static deleteSelectedItems(module, items = []) {
        const promises = items.map(id => Fetch.remove(`${module}/${id}`));
        return Promise.all(promises);
    }

    /**
     * Send request POST /realtivePath with body
     * @param {string} relativePath Relative path name.
     * @param {object} body Body of post request.
     * @param {object} [headers] Headers list.
     * @returns {Promise.<T>|*} Result.
     */
    static post(relativePath, body, headers = {}) {
        const URL = queryURL.getURL(relativePath);
        return Fetch.fetching(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });
    }

    /**
     * Send request POST /realtivePath with body not JSON stringified and without a header
     * @param {string} relativePath Relative path name.
     * @param {object} body Body of post request.
     * @param {object} [headers] Headers list.
     * @returns {Promise.<T>|*} Result.
     */
    static postFiles(relativePath, body, headers = {}) {
        const URL = queryURL.getURL(relativePath);
        return Fetch.fetching(URL, {
            method: 'POST',
            headers: {
                ...headers
            },
            body
        });
    }

    /**
     * Send request PUT /realtivePath with body
     * @param {string} relativePath Relative path name.
     * @param {object} body PUT request body.
     * @param {object} [headers] Request headers.
     * @returns {Promise.<T>|*} Result.
     */
    static put(relativePath, body, headers = {}) {
        const URL = queryURL.getURL(relativePath);
        return Fetch.fetching(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });
    }
}

/**
 * @memberOf module:Utils.Fetch
 * @export {Fetch}
 */
export default Fetch;
