import React from 'react';

class Services extends React.Component {

  render() {
    return (
        <section id="services">
        <img src="/img/services.jpg" alt=""/>
        <h2>Our Services</h2>
        <h3>What We Do</h3>
        <ul>
        Our Services 
            <li>HRT</li>
	        <li>PREP and HIV testing</li>
        	<li>ED meds</li> 
            <li>Letters for name change and surgical referrals</li>
	        <li>Trans Life Coaching and help with "next steps" including personalized introduction to specialists</li>
	        <li>Customized holistic health routine including: 
	            <ul>
                    <li>
                    Live virtual group fitness instruction 
                    </li>
                    <li>
                    Live virtual group Make up and Styling services 
                    </li>
	            </ul>
	        </li>
            <li>
                Community Building with live in person events and big brother big sister chat functions among TransClinique members 
            </li>
        </ul>
        <hr/>
    </section>
    );
  }
}

export default Services;