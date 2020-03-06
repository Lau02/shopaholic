import React, { Component } from "react";
import "./scss/App.scss"
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
import SingleWish from "./components/SingleWish/SingleWish";
import NewWish from "./components/NewWish/NewWish";
import WishList from "./components/WishList/WishList"

import AuthService from "./services/AuthService";


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

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            hay user
            <header className="App-header">
              <img src="/images/stop2.png" alt=""></img>
              <h1 className="shopaholic">Shopaholics</h1>
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <Switch>
              {/* <Route path="/oneWish/:id" exact render={match => <SingleWish {...match} />} /> */}
              {/* <Route exact path ="/:id" render = {() => <SingleWish></SingleWish>}/>  */}
              <Route path="/new" exact render={() => <NewWish></NewWish>}></Route>
              <Route exact path="/" render={() => <Home></Home>}></Route>

            </Switch>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>

          <div className="App">
          no hay user
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <Switch>
              <Route exact path="/" render={() => <Home></Home>}></Route>
              <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
              <Route exact path="/login" render={(props) => <Login getUser={this.getUser}  {...props}/>} />
            </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;