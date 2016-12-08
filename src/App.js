import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase';

import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import config from './config/config'
import Routers from './Router';
import ImageBackground from '../image/manhattan.jpg';

class App extends Component {

  componentWillMount(){
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    )
  }
}


export default App