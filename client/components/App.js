import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionsCreators';

import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.post,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;