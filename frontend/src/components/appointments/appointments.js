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
        <h3>We're ready to see you now!</h3>
        <p>Please fill out the form on the right hand side of this page to book an appointment. If this is your first appointment with us, please include your Date of Birth in the notes at checkout. If you have any questions, please email us at <a href="mailto:alexispetramd@gmail.com">AlexisPetraMD@gmail.com</a>.</p>

        {/* Square Appointments Embed Container */}
        <div className="square-appointments-embed-container">&nbsp;</div>

        
    </section>
    );
  }
}

export default Appointments;
