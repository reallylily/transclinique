import React from 'react';
import { Link } from 'react-router-dom';

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
            <>
                <Link to={'/listings'}>Shop</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_listing'}>Make a Listing</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </>
        );
      } else {
        return (
            <>
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
            </>
        );
      }
  }

  render() {
      return (
        <nav className="NavBar">
            { this.getLinks() }
        </nav>
      );
  }
}

export default NavBar;
