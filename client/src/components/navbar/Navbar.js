import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./Navbar.scss";

class Navbar extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.props.userInSession) {
      return (
        <nav className="nav-style">
         
              <button
                className="button is-large has-text-weight-bold"
                onClick={this.handleLogout}
              >
                Logout
              </button>
              <p>{this.props.userInSession.username}</p>
        </nav>
      );
    } else {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
