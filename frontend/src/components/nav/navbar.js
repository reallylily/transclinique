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
                <Link to={'/tweets'}>Shop</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Make a Post</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/tweets'}>Shop</Link>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <h1>PressOnShop</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;