import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import store from './Redux/store'
import Registration from '../src/Component/Registration/UserRegistration'
import { Provider } from 'react-redux';
function App() {
  return (

    <Router>
      <Switch>
        <Provider store={store}>
        <div className="App">
          <Registration />
          {/* <Route exact path="/" component={Registration} /> */}
        </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
