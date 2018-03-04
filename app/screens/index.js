import Home from './Home';
import NewsList from './List/News';
import SearchList from './List/Search'
import News from './News';

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
    }
};

export default screensConfiguration;