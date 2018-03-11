import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NewsListComponent from '../NewsList.component';
import ScreenWrapper from '../../../components/ScreenWrapper/index';

import {fetchWithQuery} from '../../../actions/fetch.actions';


const mapStateToProps = ({request: {data: items}}) => ({
        items
    }),
    mapDispatchToProps = dispatch => ({
        fetchNewsWithQuery: query => dispatch(fetchWithQuery(query))
    });


class NewsList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({})),
        style: PropTypes.number,
        category: PropTypes.string,
        fetchNewsWithQuery: PropTypes.func,
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            state: PropTypes.shape({
                params: PropTypes.shape({
                    query: PropTypes.string
                })
            })
        })
    };

    static defaultProps = {
        items: [],
    };

    constructor(props) {
        super(props);
        this.navigateTo = this.navigateTo.bind(this);
        this.getNewsList = this.getNewsList.bind(this);
    }

    componentDidMount() {
        this.getNewsList();
    }

    getNewsList() {
        const {navigation: {state: {params: {query}}}, fetchNewsWithQuery} = this.props;
        fetchNewsWithQuery(query).catch(() => {
            this.props.navigation.navigate('Error');
        });
    }

    navigateTo(screen, config) {
        this.props.navigation.navigate(screen, config);
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

        return <NewsListComponent {...listProps} />;
    }
}

export default ScreenWrapper(connect(mapStateToProps, mapDispatchToProps)(NewsList), {}, ({state: {params: {query}}}) => ({
    title: `Search: ${query}`
}));