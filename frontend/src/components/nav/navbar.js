import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getHamburger = this.getHamburger.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <>
                {/* <Link to={'/listings'}>Shop</Link> */}
                {/* <Link to={'/new_listing'}>Make a Listing</Link> */}
                <Link to={'/'}>Home</Link>
                <Link to={'/appointments'}>Appointments</Link>
                <Link to={'/aboutus'}>About Us</Link>
                <Link to={'/process'}>Our Process</Link>
                <Link to={'/services'}>Our Services</Link>
                <Link to={'/expect'}>What to Expect</Link>
                <Link to={'/insurance-fees'}>Insurance &amp; Fees</Link>
                <Link to={'/locations'}>Locations</Link>
                <Link to={'/resources'}>Resources</Link>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </>
        );
      } else {
        return (
            <>
                {/* <Link to={'/listings'}>Shop</Link> */}
                <Link to={'/'}>Home</Link>
                <Link to={'/appointments'}>Appointments</Link>
                <Link to={'/aboutus'}>About Us</Link>
                <Link to={'/process'}>Our Process</Link>
                <Link to={'/services'}>Our Services</Link>
                <Link to={'/expect'}>What to Expect</Link>
                <Link to={'/insurance-fees'}>Insurance &amp; Fees</Link>
                <Link to={'/locations'}>Locations</Link>
                <Link to={'/resources'}>Resources</Link>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </>
        );
      }
  }

  handleHamburgerClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleCloseClick() {
    this.setState({ isOpen: false });
  }

  handleMenuClick(event) {
    // if menu is open and click event was on a link, close the menu
    if(this.state.isOpen && event.target.tagName === 'A') {
      this.setState({ isOpen: false });
    }
  }

  getHamburger() {
    return (
      <div className="menu-icon" onClick={this.handleHamburgerClick}>
        <svg viewBox="0 0 18 15">
          <path fill="#424242" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
          <path fill="#424242" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
          <path fill="#424242" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
        </svg>
      </div>
    );
  }

  render() {
      return (
        <>
          { this.getHamburger() }
          <nav className={this.state.isOpen ? 'NavBar NavBar--open' : 'NavBar'} onClick={this.handleMenuClick}>
            { this.state.isOpen && <span className="close-icon" onClick={this.handleCloseClick}>✕</span> }
            { this.getLinks() }
          </nav>
        </>
      );
  }
}

export default NavBar;
