import { connect } from 'react-redux'
import Root from './Root.component';


const mapStateToProps = ({loader = []}) => ({
    isLoader: loader.length > 0
});

export default connect(mapStateToProps)(Root);