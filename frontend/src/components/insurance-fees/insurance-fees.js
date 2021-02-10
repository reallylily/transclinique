import React from 'react';

class InsuranceFees extends React.Component {

  render() {
    return (

        <section id="insurance-and-fees">
        <h2>Insurance &amp; Fees</h2>
        <div id="fees">
            <h3>Fee Structure</h3>
            <p>
                New Patient Evaluation for HRT $150 <br/>                                    
                Existing Patient Evaluation for HRT $125 <br/>
                Urgent and Primary Care Evaluation  $125 <br/>
                Gender Name Change Letter $100
            </p>
        </div>
        <div id="labs">
            <h3>Labs</h3>
            <p>There will be no charge on our end. Your insurance will likely cover your labs. Without insurance it will generally cost roughly $99 per visit.</p>
        </div>
        <div id="medications">
            <h3>Medications</h3>
            <p>Costs vary per prescription type and the pharmacy that you choose.</p>
        </div>
        <div id="insurance">
            <h3>Insurance</h3>
            <p>We are working diligently to get on multiple insurance plans however we are a cash only clinic at this early juncture. Even if the visit fee does not get reimbursed at this point, your plan will likely still cover the labs and medications. We will also create an insurance invoice which you can submit to your insurance company for reimbursement.</p>
        </div>
    </section>
    );
  }
}

export default InsuranceFees;