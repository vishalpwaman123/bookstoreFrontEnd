import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import store from './Redux/store'
import Registration from '../src/Component/Registration/UserRegistration'
import Dashbord from '../src/Component/Dashborder/dashbord'
import ForgetPassword from '../src/Component/ForgetPassword/forgetPassword'
import HomeBook from '../src/Component/Dashborder/HomeBook'
import Cart from '../src/Component/Dashborder/Cart'
import OrderPlace from '../src/Component/Dashborder/OrderPlace'
import Profile from '../src/Component/Dashborder/Profile'
import MyOrder from '../src/Component/Dashborder/MyOrder'
import WishList from '../src/Component/Dashborder/WishList'

import { Provider } from 'react-redux';
function App() {
  return (

    <Router>
      <Switch>
        <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Registration} />
          <Route exact path="/dashboard" component={Dashbord} />
          <Route exact path="/ForgetPassword" component={ForgetPassword} />
          <Route exact path="/HomeBook" component={HomeBook} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/OrderPlace" component={OrderPlace} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/MyOrder" component={MyOrder} />
          <Route exact path="/WishList" component={WishList} />
        </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
