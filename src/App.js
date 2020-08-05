import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from './views/Home'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    </>
      );
}

export default App;
