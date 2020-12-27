import React from 'react';

class Resources extends React.Component {

  render() {
    return (
        <section id="resources">
            <h2>Resources</h2>
            <div id="pdf">
                <h3>Helpful Informational .pdf Documents</h3>
                <a id="transition-roadmap" href="/pdf/transition-roadmap.pdf">Transition Roadmap</a>
                <a id="estrogen-hormone-therapy" href="/pdf/estrogen-hormone-therapy.pdf">Estrogen Hormone Therapy</a>
                <a id="testosterone-hormone-therapy" href="/pdf/testosterone-hormone-therapy.pdf">Testosterone Hormone Therapy</a>
            </div>
            <div id="external">
                <h4>TransClinique provides these links for your convenience; we have no formal relationships with these providers or groups</h4>
                <div id="mental-health-ca">   
                    <h3>Mental Health Providers (California)</h3>
                    <a href="https://www.drericaanderson.com/">Erica E. Anderson, Ph.D</a>
                    <a href="http://linfraser.com/">Lin Fraser EdD</a>
                    <a href="http://drdavidnylund.com/">Dr. David Nylund, LCSW, PhD</a>
                    <a href="https://drtrishawallis.com/">Dr. Trisha D. Wallis, Psychologist</a>
                    <a href="https://dankarasic.com/">Dr. Dan Karasic, MD</a>
                </div>
                <div id="mental-health-il">
                    <h3>Mental Health Providers (Illinois)</h3>
                    <a href="https://www.psychologytoday.com/us/therapists/transgender/illinois">Transgender Therapists in Illinois</a>
                </div>
                <div id="mental-health-ny">
                    <h3>Mental Health Providers (New York)</h3>
                    <a href="https://www.psychologytoday.com/us/therapists/transgender/ny/new-york">Transgender Therapists in New York, NY</a>
                </div>
                <div id="reproductive">
                    <h3>Reproductive Care Providers</h3>
                    <a href="https://www.pacificfertilitycenter.com/">Pacific Fertility Center</a>
                </div>
                <div id="legal">
                    <h3>Legal Resources</h3>
                    <a href="https://transgenderlawcenter.org/">Transgender Law Center</a>
                    <a href="https://outandequal.org/">Out and Equal Workplace Advocatez</a>
                </div>
                <div id="speech">
                    <h3>Speech Therapy Provider</h3>
                    <a href="https://www.exceptionalvoice.com/about-kathe-perez/">Exceptional Voice</a>
                    <a href="https://www.genderexpressionvoicetraining.com/">Gender Expression Voice Training</a>
                </div>
                <div id="support-groups">
                    <h3>Support Groups</h3>
                    <a href="https://www.translifeline.org/">Trans Lifeline</a>
                </div>
            </div>
            {/* <img src="/img/transcliniqueLogo.svg" alt="TransClinique"/> */}
        </section>  

    );
  }
}

export default Resources;