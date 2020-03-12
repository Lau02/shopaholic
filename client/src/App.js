import React, { Component } from "react";
import "./scss/App.scss"
import { Switch, Route, Link, withRouter, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
import NewWish from "./components/NewWish/NewWish";
import AuthService from "./services/AuthService";
import Footer from "./components/Footer/Footer";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import SingleWish from "./components/SingleWish/SingleWish";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null , navigate: false};
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
      this.setState({ loggedInUser: null, navigate: true }, ()=>console.log(this.state));
      
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
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
           
              <header className="App-header">
                <Link to="/" /><img id="shop-logo"src="/images/shopaholics_blanco.svg" alt="Shopaholic"/>
                <div className="navbar">
                <Navbar userInSession={this.state.loggedInUser} logout={this.logout}  {...this.props}/>
                </div>
              </header>

              <main className="container">
                <Switch>
                  <Route path="/new" exact render={() => <NewWish userInSession={this.state.loggedInUser}></NewWish>}></Route>
                  <Route exact path="/user/:id" render={(props) => <AdminPanel {...props}></AdminPanel>}></Route>
                  {/* <Route exact path="/wishes/:id" render ={(props) => <SingleWish {...props}></SingleWish>}></Route> */}
                  <Route exact path="/wishes/:id" render ={(props) => <SingleWish {...props} userInSession={this.state.loggedInUser}></SingleWish>}></Route>
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
              {/* <img src="/images/stop2.png" alt=""></img> */}
              <img id="shop-logo"src="/images/shopaholics_blanco.svg" alt="Shopaholic"/>
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
              {(this.state.navigate) && <Redirect to="/" push="true"/>}
            <Footer></Footer>

          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;