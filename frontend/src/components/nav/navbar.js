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
                {/* <Link to={'/listings'}>Shop</Link>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link> */}
                <Link to={'/'}>Home</Link>
                <Link to={'/aboutus'}>About Us</Link>
                <Link to={'/process'}>Our Process</Link>
                <Link to={'/services'}>Our Services</Link>
                <Link to={'/expect'}>What to Expect</Link>
                <Link to={'/insurance-fees'}>Insurance &amp; Fees</Link>
                <Link to={'/locations'}>Locations</Link>
                <Link to={'/appointments'}>Appointments</Link>
                <Link to={'/resources'}>Resources</Link>

        {/* <img src="/img/header.jpg" alt="TransClinique"/> */}
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