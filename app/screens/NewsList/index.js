import React from 'react';
import {connect} from 'react-redux'

import NewsListComponent from './NewsList.component';
import ScreenWrapper from '../../components/ScreenWrapper';
import {fetchTopHeadlinesForCountry} from '../../actions/fetch.actions';


const mapStateToProps = ({request: {data, country, category}}) => ({
        items: data,
        country,
        category
    }),
    mapDispatchToProps = dispatch => ({
        fetchNews: country => dispatch(fetchTopHeadlinesForCountry(country))
    });


class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.navigateTo =this.navigateTo.bind(this);
    }

    navigateTo(screen, config) {
        this.props.navigation.navigate(screen, config);
    }

    render() {
        const {items, style} = this.props,
            listProps = {
                style,
                items,
                navigateTo: this.navigateTo
            };

        return <NewsListComponent {...listProps} />
    }

    componentDidMount() {
        const {navigation: {state: {params: {country}}}, fetchNews} = this.props;
        fetchNews(country);
    }

}

export default ScreenWrapper(connect(mapStateToProps, mapDispatchToProps)(NewsList), {
    title: 'NewsList'
});