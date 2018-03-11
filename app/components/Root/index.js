import { connect } from 'react-redux';
import Root from './Root.component';
import withNetInfo from '../../HOC/withNetInfo';


const mapStateToProps = ({loader = []}) => ({
    isLoader: loader.length > 0
});

export default withNetInfo(connect(mapStateToProps)(Root));