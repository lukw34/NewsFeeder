import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Flag from 'react-native-flags';

import NewsListComponent from '../NewsList.component';
import ScreenWrapper from '../../../components/ScreenWrapper/index';

import {fetchTopHeadlinesForCountry, fetchByCategory} from '../../../actions/fetch.actions';
import {mapCategories} from '../../../utils/mapper';
import styles from '../styles';

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
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({})),
        style: PropTypes.shape({}),
        category: PropTypes.string,
        fetchNews: PropTypes.func,
        fetchNewsByCategory: PropTypes.func,
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            state: PropTypes.shape({
                params: PropTypes.shape({
                    country: PropTypes.string
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
        this.getNewsListByCategory = this.getNewsListByCategory.bind(this);
    }


    componentDidMount() {
        const {navigation: {state: {params: {country}}}, fetchNews} = this.props;
        fetchNews(country);
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
        const {navigation: {state: {params: {country}}}, fetchNewsByCategory, fetchNews} = this.props;
        if (category) {
            return fetchNewsByCategory(country, category).catch(() => {
                this.props.navigation.navigate('Error');
            });
        }

        return fetchNews(country).catch(() => {
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
                onTilePress: this.getNewsListByCategory,
                style,
                items,
                onRefresh: this.getNewsList,
                navigateTo: this.navigateTo
            };

        return <NewsListComponent {...listProps} />;
    }

}

export default ScreenWrapper(connect(mapStateToProps, mapDispatchToProps)(NewsList), {}, ({state: {params: {country: countryCode, category}}}) => ({
    headerRight: (<Flag
        style={styles.navigatorFlag}
        code={(countryCode).toUpperCase()}
        size={32}
    />),
    title: mapCategories(category).label.toUpperCase()
}));