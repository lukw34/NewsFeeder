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
    }


    render() {
        const {items} = this.props,
            listProps = {
                items
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