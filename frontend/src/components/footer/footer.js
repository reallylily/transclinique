import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {

  render() {
    return (
    <footer>
        <img src="/img/transcliniqueLogo.svg" alt="TransClinique"/>
        <nav className='footer-link-container'>
                <Link to={'/'}>Home</Link>
                <Link to={'/aboutus'}>About Us</Link>
                <Link to={'/process'}>Our Process</Link>
                <Link to={'/services'}>Our Services</Link>
                <Link to={'/expect'}>What to Expect</Link>
                <Link to={'/insurance-fees'}>Insurance &amp; Fees</Link>
                <Link to={'/locations'}>Locations</Link>
                <Link to={'/appointments'}>Appointments</Link>
                <Link to={'/resources'}>Resources</Link>
        </nav>
        <nav>
            <a href="/terms-conditions">Website Terms &amp; Conditions</a>
            <a href="/privacy-policy">Website Privacy Policy</a>
            <a className="email social-media" href="mailto:AlexisPetraMD@TransClinique.com">&nbsp;</a>
            <a className="facebook social-media" href="https://www.facebook.com/transclinique">&nbsp;</a>
            <a className="instagram social-media" href="https://www.instagram.com/transclinique/">&nbsp;</a>
        </nav>
        <p id="copyright">Copyright &copy; 2020 Alexis Petra, MD PLLC d/b/a TransClinique. All rights 
        reserved.
        </p>
        <p id="disclaimer">The information provided on this website is not medical advice. It is only for informational 
            and educational purposes. Please contact your healthcare provider to discuss your health
             concerns, diagnoses, or treatments. In a medical emergency, call 911.
             <br/>
             <br/>
             Your website-related activities and communications do not create a provider-patient 
             relationship between you and TransClinique and do not create a duty for us to follow up with you.
              To learn about our services, please contact us directly.
        </p>

    </footer>
    );
  }
}

export default Footer;