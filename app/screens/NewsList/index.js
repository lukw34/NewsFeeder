import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import NewsListComponent from './NewsList.component';
import ScreenWrapper from '../../components/ScreenWrapper';
import Flag from 'react-native-flags';

import {fetchTopHeadlinesForCountry, fetchByCategory} from '../../actions/fetch.actions';
import {mapCategories} from '../../utils/mapper';
import styles from './styles'

const mapStateToProps = ({request: {data: items, country, category}}) => ({
        items,
        country,
        category
    }),
    mapDispatchToProps = dispatch => ({
        fetchNews: country => dispatch(fetchTopHeadlinesForCountry(country)),
        fetchNewsByCategory: (country, category) => dispatch(fetchByCategory(country, category))
    });


class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.navigateTo = this.navigateTo.bind(this);
        this.getNewsList = this.getNewsList.bind(this);
        this.getNewsListByCategory = this.getNewsListByCategory.bind(this);
    }

    navigateTo(screen, config) {
        this.props.navigation.navigate(screen, config);
    }

    componentWillReceiveProps({category: newCategory}) {
        const {category, navigation} = this.props;
        if (newCategory !== category) {
            navigation.setParams({category: newCategory});
        }
    }

    getNewsList() {
        this.getNewsListByCategory(mapCategories(this.props.category).url);
    }

    getNewsListByCategory(category) {
        const {country, fetchNewsByCategory, fetchNews} = this.props;
        if (category) {
            fetchNewsByCategory(country, category);
        } else {
            fetchNews(country);
        }
    }

    render() {
        const {items, style, category: activeCategory} = this.props,
            listProps = {
                activeCategory,
                onTilePress: this.getNewsListByCategory,
                style,
                items,
                onRefresh: this.getNewsList,
                navigateTo: this.navigateTo
            };

        return <NewsListComponent {...listProps} />
    }

    componentDidMount() {
        const {navigation: {state: {params: {country}}}, fetchNews} = this.props;
        fetchNews(country);
    }

}

NewsList.propTypes = {
    items: PropTypes.array,
    style: PropTypes.any,
    category: PropTypes.string,
    fetchNews: PropTypes.func,
    fetchNewsByCategory: PropTypes.func,
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                country: PropTypes.string
            })
        })
    })
};

export default ScreenWrapper(connect(mapStateToProps, mapDispatchToProps)(NewsList), {}, ({state: {params: {country: countryCode, category}}}) => ({
    headerRight: (<Flag
        style={styles.navigatorFlag}
        code={(countryCode).toUpperCase()}
        size={32}
    />),
    title: mapCategories(category).label.toUpperCase()
}));