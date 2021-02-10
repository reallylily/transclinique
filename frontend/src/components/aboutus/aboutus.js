import React from 'react';

class AboutUs extends React.Component {

  render() {
    return (
        <div>
            <section className="about">
                <h2>About Us</h2>
                <p>
                  TransClinique’s medical practice provides telemedicine-based clinical services for 
                  transgender individuals, as well as others who identify as non-cisgender. We also welcome
                  all members of the LGBT community. TransClinique employs, when possible, physicians, 
                  psychologists and other healthcare providers who identify as transgender themselves, 
                  or those who have otherwise established excellence in caring for transgender patients. 
                  This includes professionals who qualify as “gender identity specialists” for the purpose 
                  of supporting hormonal therapy and screening for trans-associated surgeries.
                </p>
                <img src="/img/about.jpg" alt="" />
                <hr/>
            </section>
            
            <section className="staff-desc">
                <h2>Meet The Doctor</h2>
                <h3>Alexis Petra MD</h3>
                <p>
                  Alexis was born and raised in Pittsburgh, PA. She received her MD from University of 
                  Pittsburgh in 2000, completed her residency in Emergency Medicine at the University of 
                  Arizona, and since then has maintained an Emergency Medicine practice as well as a practice 
                  in concierge medicine for the past three years. In 2019, she was named one of Phoenix Magazine’s 
                  Top Doctors in the Valley. Dr. Petra is board-certified in emergency medicine, and licensed in 
                  Arizona, California, Colorado, Illinois, Michigan, Nevada, New York, and Washington. She is a 
                  member in good standing with WPATH. For the past 8 years, she has been living and working in 
                  San Francisco, and has been personally and professionally involved in the transgender 
                  community for over twenty years.
                  <br/>
                  <br/>
                  As a trans woman herself, Alexis understands the special needs 
                  that members of this community have, and knows first hand both the hardships and rewards of the 
                  trans journey.
                </p>
                <img src="/img/alexis-petra-md.jpg" alt="Alexis Petra MD"/>
            </section>

            <section className="staff-desc">
                <h2>Meet The Personal Trainer</h2>
                <h3>
                  Allie Ferrey M.S., NASM-CPT - 
                  <a href="https://www.instagram.com/fitafitness_/">
                      <img className="instagram-icon" src="/img/instagram.svg" alt="Instagram"/>
                       @fitafitness_
                  </a>
                </h3>
                <p>
                  Allie is currently working on her Ph.D. in Kinesiology at Columbia University in New York 
                  and is CPR certified.  Her Master’s thesis and prime area of research observes the problems 
                  and challenges that transgender youth face in school and recreational physical activity 
                  environments. She has worked with youth fitness programs and is a WPATH member.
                  <br/>
                  <br/>
                  In her work and academic life, she has advocated for minority groups, and aims to 
                  promote physical fitness and healthy lifestyles for all. She will work with you in 
                  creating a program that is tailored to your specific fitness goals and get you your 
                  desired results that you will be able to see, feel, and measure.
                </p>
                <img  src="/img/allie.jpg" alt="Allie Ferrey M.S., NASM-CPT"/>
            </section>

            <section className="staff-desc">
                <h2>Meet The Makeup Artist</h2>

  
                <h3>
                <>Casey Blake - </>
                  <a href="https://www.instagram.com/thecaseyblake/">
                      <img className="instagram-icon" src="/img/instagram.svg" alt="Instagram"/>
                       @thecaseyblake
                  </a>
                  <> - </>
                  <a href="https://thecaseyblake.com/contact/makeup-lessons/">Consultation application</a>
                </h3>


                <p>
                  "I fell in love with makeup at the age of 15 after cross-dressing for the first time. 
                  An out and proud trans woman, I’ve worked with countless individuals teaching makeup and
                  feminization tips/tricks. I am excited to help you too!" - Casey
                  <br/>
                  <br/>
                  A starlet by nature, Casey started her YouTube channel to document her transition on her 16th Birthday.
                  A Graphic Designer by trade, she has a single-handily developed her personal brand, 
                  Casey Blake, as a one-woman team. You can find her on Instagram at <></>
                  <a href="https://https://www.instagram.com/thecaseyblake/">@thecaseyblake</a>.
                  She is motivated by a strong desire to transform the world into a safer 
                  place through acceptance and awareness.
                </p>

                <img  src="/img/CaseyBlake_BW_cropped.jpg" alt="Casey Blake"/>
            </section>
   
        </div>
    );
  }
}

export default AboutUs;