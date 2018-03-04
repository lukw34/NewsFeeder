import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import NewsListComponent from '../NewsList.component';
import ScreenWrapper from '../../../components/ScreenWrapper/index';
import Flag from 'react-native-flags';

import {fetchWithQuery} from '../../../actions/fetch.actions';
import {mapCategories} from '../../../utils/mapper';
import styles from '../styles'

const mapStateToProps = ({request: {data: items}}) => ({
        items
    }),
    mapDispatchToProps = dispatch => ({
        fetchNewsWithQuery: query => dispatch(fetchWithQuery(query))
    });


class NewsList extends React.Component {
    static propTypes = {
        items: PropTypes.array,
        style: PropTypes.any,
        category: PropTypes.string,
        fetchNewsWithQuery: PropTypes.func,
        navigation: PropTypes.shape({
            state: PropTypes.shape({
                params: PropTypes.shape({
                    query: PropTypes.string
                })
            })
        })
    };

    constructor(props) {
        super(props);
        this.navigateTo = this.navigateTo.bind(this);
        this.getNewsList = this.getNewsList.bind(this);
    }

    navigateTo(screen, config) {
        this.props.navigation.navigate(screen, config);
    }

    getNewsList() {
        const {navigation: {state: {params: {query}}}, fetchNewsWithQuery} = this.props;
        fetchNewsWithQuery(query);
    }

    render() {
        const {items, style, category: activeCategory} = this.props,
            listProps = {
                activeCategory,
                style,
                showTiles: false,
                items,
                onRefresh: this.getNewsList,
                navigateTo: this.navigateTo
            };

        return <NewsListComponent {...listProps} />
    }

    componentDidMount() {
        this.getNewsList();
    }

}

export default ScreenWrapper(connect(mapStateToProps, mapDispatchToProps)(NewsList), {}, ({state: {params: {query}}}) => ({
    title: `Search: ${query}`
}));