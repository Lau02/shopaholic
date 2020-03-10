import React, { Component } from "react";
import "./scss/App.scss"
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
// import SingleWish from "./components/SingleWish/SingleWish";
import NewWish from "./components/NewWish/NewWish";
//import WishList from "./components/WishList/WishList"

import AuthService from "./services/AuthService";
import Footer from "./components/Footer/Footer";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import SingleWish from "./components/SingleWish/SingleWish";


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
    })
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      //this.props.history.push(`/`)
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
           
              <header className="App-header">
                <img src="/images/stop2.png" alt=""></img>
                <h1 className="shopaholic">Shopaholics</h1>
                <div className="navbar">
                <Navbar userInSession={this.state.loggedInUser} logout={this.logout}  {...this.props}/>
                </div>
              </header>

              <main>
                <Switch>
                  <Route path="/new" exact render={() => <NewWish userInSession={this.state.loggedInUser}></NewWish>}></Route>
                  <Route exact path="/user/:id" render={() => <AdminPanel></AdminPanel>}></Route>
                  <Route exact path="/wishes/:id" render ={(props) => <SingleWish {...props}></SingleWish>}></Route>
                </Switch>
              </main>
          
              <Footer></Footer>


          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>

          <div className="App">

            <header className="App-header">
              <img src="/images/stop2.png" alt=""></img>
              <h1 className="shopaholic">Shopaholics</h1>
              <div className="navbar">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout}  {...this.props}/>
              </div>
            </header>

            <main>
              <Switch>
                  <Route exact path="/" render={() => <Home></Home>}></Route>
                  <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                  <Route exact path="/login" render={(props) => <Login getUser={this.getUser}  {...props}/>} />
                </Switch>
            </main>

            <Footer></Footer>

          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;