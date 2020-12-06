import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/listings'}>Shop</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_listing'}>Make a Listing</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/listings'}>Shop</Link>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
        <img src="/img/header.jpg" alt="TransClinique"/>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;