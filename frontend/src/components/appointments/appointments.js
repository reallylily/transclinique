import React from 'react';


class Appointments extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://squareup.com/appointments/buyer/widget/kn6bsh8fou7l9b/L2EX4SEH240P1.js";
    script.async = true;
    document.querySelector('.square-appointments-embed-container').appendChild(script);
  }

  componentWillUnmount() {
    document.querySelector('.square-appointments-embed-container iframe').remove();
  }

  render() {
    return (
    <section id="appointments">
        <h2>Appointments</h2>
        <h3>How To Set Up Your First Appointment:</h3>
        <p>The first step to become a patient with TransClinique is to send us an email with your name, phone number and the email address that you prefer to have on record with us. You can fill out the form on the right hand side of this page to book an appointment. If you have any questions, please email us at <a href="mailto:AlexisPetraMD@TransClinique.com">AlexisPetraMD@ TransClinique.com</a>.</p>
        <p>Once your self-referral is received, TransClinique will send you an email back with an active link to our HIPAA compliant, safe and secure patient portal. There you will fill out a registration form and make your first appointment with us. </p>

        {/* Square Appointments Embed Container */}
        <div className="square-appointments-embed-container">&nbsp;</div>
    </section>
    );
  }
}

export default Appointments;
