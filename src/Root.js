import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { Provider } from "react-redux";
import Timeline from "./components/Timeline";
import configureStore from "./store/configStore";
import User from "./components/User";
import Photo from "./components/Photo";
import { MyNavBar } from "./components/Navbar";
import 'antd-mobile/dist/antd-mobile.css';
import 'bulma/css/bulma.min.css';
import './assets/fontawesome/css/all.css'
import './RezaInstagram.css';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <MyNavBar></MyNavBar>
            <Switch>
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/user" component={User} />
              <Route exact path="/photo" component={Photo} />
              <Redirect exact from="/" to="timeline" />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Root;
