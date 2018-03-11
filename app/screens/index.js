import Home from './Home';
import NewsList from './List/News';
import SearchList from './List/Search';
import News from './News';
import ErrorPage  from './Error';

const screensConfiguration = {
    home: {
        screen: Home,
        name: 'Home'
    },
    newsList: {
        screen: NewsList,
        name: 'NewsList'
    },
    searchList: {
        screen: SearchList ,
        name: 'SearchNewsList'
    },
    news: {
        screen: News,
        name: 'News'
    },
    error: {
        screen: ErrorPage,
        name: 'Error'
    }
};

export default screensConfiguration;