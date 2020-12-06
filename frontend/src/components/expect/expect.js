import React from 'react';

class Expect extends React.Component {

  render() {
    return (
        <section id="expect">
        <h2>What To Expect</h2>
        <h3>For Our Hormone Replacement Therapy Patients</h3>
        <div id="step1">
            <div className="steps"><span className="step">Step</span> <span className="step-number">1</span></div>
            <h3 className="blue">Initial Consultation <br />With TransClinique</h3>
            <p>Your first visit will entail a full medical history and discussion of your gender journey thus far. The appropriateness and goals of Hormone Replacement Therapy (HRT) will be carefully considered. We will review the medication(s), side effects, risks and benefits of treatment, laboratory monitoring, and frequency of follow up visits. This visit will be a 60 minute consultation. In most cases this visit will be via telemedicine. Transclinique operates on an Informed Consent Model meaning that we can start medications without a therapist visit. However, we have strong mental health providers under the TransClinique umbrella available to help you navigate this challenging portion of your life. Routine screening at your initial visit for depression, anxiety, posttraumatic stress disorder, eating disorders, substance abuse, intimate partner violence, self-injury, high-risk sexual behaviors and suicidality will be provided.</p>
        </div>
        <div id="step2">
            <div className="steps"><span className="step">Step</span> <span className="step-number">2</span></div>
            <h3>Laboratory Tests</h3>
            <p>We will need to check your hormone levels, liver and kidney function before starting any kind of HRT. If you would like to get your lab testing prior to your first visit, you may contact us beforehand and ask us to submit a lab order. By ordering your lab tests prior to your first visit you may be able to expedite the process of beginning your treatment. This will need to be done at the nearest lab facility near you which we can help you locate. The order for the appropriate blood tests will be waiting for your arrival.</p>
        </div>
        <div id="step3">
            <div className="steps"><span className="step">Step</span> <span className="step-number">3</span></div>
            <h3>Hormone Therapy</h3>
            <p>Once your full medical evaluation is complete and all of your questions have been addressed, you will be eligible to begin hormone therapy. During the first year of HRT therapy, you will need blood tests every three months in order for us to follow your levels closely. We will start with a small dose and carefully monitor your body’s response. Assuming your lab work is satisfactory, we can then increase your dose. This usually will take about 6-12 months to stabilize. Typically patients require four visits the first year and twice a year after that. Follow-up visits are usually 20 minutes.</p>
        </div>
        <div id="note">
            <h3>Please Note</h3>
            <p>State laws requiring patients receiving testosterone treatment to have at least one in-person appointment prior to starting HRT have been temporarily suspended due to the recent COVID-19 outbreak. If this changes we can accomodate you through one of our many of our planned Pop-Up Clinics, although special considerations and meetings can also usually be arranged.</p>
        </div>
        <hr/>
    </section>
    );
  }
}

export default Expect;