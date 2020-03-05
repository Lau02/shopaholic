import React, { Component } from "react";
import "./App.css";
import "./scss/App.scss"
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import Contents from "./components/contents/Contents";
import WishList from "./components/WishList/WishList";
import SingleWish from "./components/SingleWish/SingleWish";
import Wishitems from "./components/WishItems/WishItems";
import Finances from "./components/Finances/Finances";

import AuthService from "./services/AuthService";
import WishesService from "./services/WishesService";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Redirect to="/" />

          <div className="App">
          {/* <section class="logo-title"> */}
            <img src="/images/stop2.png"></img>
            <h1>Shopaholic</h1>
            {/* </section> */}
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Contents />
              <Switch>

                {/* <Route exact path ="/all" render = {() => <WishList></WishList>} /> */}
                {/* <Route exact path ="/:id" render = {() => <SingleWish></SingleWish>}/> */}

                <Route />
             </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect to="/login" />
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;