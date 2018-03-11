import {BASE_URL} from '../constants';
/**
 * Create query url for requests
 * @memberOf Utils.
 */
class QueryURL {

    /**
     * Create new instance
     * @param {string} [href] Base href
     */
    constructor(href = BASE_URL) {
        this.href = href;
    }

    /**
     * Create query url
     * @param {number} limit Limit param.
     * @param {number} offset Offset param.
     * @param {Object} order Order param.
     * @param {Object} filters Filters param.
     * @returns {string} Query text.
     */
    static getQuery({limit = 0, offset = 0, order = [], filters = {}, fields = []} = {}) {
        let query = `?offset=${offset}&limit=${limit}`;

        if (filters.query) {
            const fieldsKeys = Object.keys(filters.query);
            if (fieldsKeys.length > 0) {
                query += `&query=${this.parseFilterQuery(filters.query, fieldsKeys)}`;
            }
        }

        const filterCopy = JSON.parse(JSON.stringify(filters));
        delete filterCopy.query;

        Object.keys(filterCopy).forEach(fil => {
            const filterField = filters[fil];

            if (Array.isArray(filterField)) {
                query += filterField.length > 0 ? `&${fil}=${(filterField).map(v => `${v}`).join(',')}` : '';
            } else {
                query += `&${fil}=${filterField}`;
            }
        });

        if (order.length > 0) {
            query = `${query}&order=`;
            order.forEach(val => {
                query = `${query}${val.by}:${val.arrangement || 'ASC'}`;
            });
        }

        if (fields.length) {
            query = `${query}&fields=${fields.join(',')}`;
        }

        return query;
    }

    static getMediaQuery({order = []} = {}) {
        let query = '';
        if (order.length > 0) {
            query = '?order=';
            order.forEach(val => {
                query = `${query}${val.by}:${val.arrangement || 'ASC'}`;
            });
        }

        return query;
    }

    /**
     * Generate filter query
     * @param {Object} filters key - field name, value - query
     * @param {string[]} fieldsName Name of field.
     * @private
     */
    static parseFilterQuery(filters = {}, fieldsName = []) {
        const filtersResult = {};
        fieldsName.forEach(val => {
            const query = filters[val];
            if (query) {
                filtersResult[val] = query;
            }
        });

        return JSON.stringify(filtersResult);
    }

    /**
     * Parse path.
     * @param {string} path Path value..
     * @private
     */
    static parsePath(path = '') {
        return path.charAt(0) === '/' ? path.substring(1) : path;
    }

    /**
     * Create for list resource
     * @param {string} resource Name of resource
     * @param {Object} querySettings Settings for query.
     * @returns {string}
     */
    getListURL(resource, querySettings) {
        const path = QueryURL.parsePath(resource);
        return `${this.href}/${path}${QueryURL.getQuery(querySettings)}`;
    }

    /**
     * Create for media list resource
     * @param {string} resource Name of resource
     * @param {Object} querySettings Settings for query.
     * @returns {string}
     */
    getMediaListURL(resource, querySettings) {
        const path = QueryURL.parsePath(resource);
        return `${this.href}/${path}${QueryURL.getMediaQuery(querySettings)}`;
    }

    /**
     * Create URL without query
     * @param {string} [relativePath] Relative path of reosurce.
     * @returns {string} Full url.
     */
    getURL(relativePath) {
        const path = QueryURL.parsePath(relativePath);
        return `${this.href}${relativePath ? '/' : ''}${path}`;
    }
}
/**
 * @memberOf Utils.QueryURL
 * @type {QueryURL}
 * @export {QueryURL}
 */
export default QueryURL;
