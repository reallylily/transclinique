import React from 'react';

class Footer extends React.Component {

  render() {
    return (
    <footer>
        <nav>
            <a href="/#about">About Us</a>
            <a href="/#process">Our Process</a>
            <a href="/#services">Our Services</a>
            <a href="/#expect">What To Expect</a>
            <a href="/#insurance-and-fees">Insurance &amp; Fees</a>
            <a href="/#locations">Locations</a>
            <a href="/#appointments">Appointments</a>
            <a href="/#resources">Resources</a>
        </nav>
        <nav>
            <a href="/terms-conditions.php">Website Terms &amp; Conditions</a>
            <a href="/privacy-policy.php">Website Privacy Policy</a>
            <a class="email social-media" href="mailto:AlexisPetraMD@TransClinique.com"></a>
            <a class="facebook social-media" href="https://www.facebook.com/transclinique"></a>
            <a class="instagram social-media" href="https://www.instagram.com/transclinique/"></a>
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