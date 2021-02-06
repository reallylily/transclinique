import React from 'react';
import { Link } from 'react-router-dom';


class MainPage extends React.Component {

  render() {
    return (
      <div className="home">
        <header id="home">
            <h1><strong>Trans</strong>Clinique</h1>
            <Link className="bookNow" to={'/appointments'}>Book Appointment</Link>
            <p>Using telemedicine to create a virtual trans clinic that provides high-quality, convenient, and compassionate trans and gender nonconforming specific health care.</p>
        </header>

        <section id="quote" className="quote">
            <p>As a transgender woman, I know how difficult it can be to find high quality and compassionate care. Having the ability to access my own care in the privacy, safety and comfort of my home would have been a gamechanger for me. I am therefore proud and honored to be in a position to  offer you the highest standard of telemedicine care as you navigate your own Trans journey.
            <br/>Alexis Petra MD</p>
            <img src="/img/transcliniqueLogo.svg" alt="TransClinique"/>
        </section>
  
      </div>
    );
  }
}

export default MainPage;