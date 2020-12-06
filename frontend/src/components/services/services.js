import React from 'react';

class Services extends React.Component {

  render() {
    return (
        <section id="services">
        <img src="/img/services.jpg" alt=""/>
        <h2>Our Services</h2>
        <h3>What We Do</h3>
        <ul>
            <li>HRT</li>
        	<li>Urgent care</li> 
            <li>Basic Primary Care</li>
	        <li>Documentation for legal name changes</li>
	        <li>PREP and HIV testing</li>
	        <li>Customized holistic health routine including: 
	            <ul>
	                <li>Diet and exercise plan</li>
	                <li>Trans life coaching</li>
	                <li>Skincare routine and makeup application</li>
	            </ul>
	        </li>
        </ul>
        <hr/>
    </section>
    );
  }
}

export default Services;