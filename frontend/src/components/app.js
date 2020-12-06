import React from 'react';
import { 
  AuthRoute, 
  // PublicRoute, 
  ProtectedRoute,
} from '../util/route_util';
import { 
  Switch,
  Route,
} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import AboutUs from './aboutus/aboutus.js'
import Process from './process/process.js';
import Services from './services/services.js';
import Expect from './expect/expect.js';
import InsuranceFees from './insurance-fees/insurance-fees.js';
import Locations from './locations/locations.js';
import Appointments from './appointments/appointments.js';
import Resources from './resources/resources.js';



import ListingsContainer from './listings/listings_container';
import ListingContainer from './listings/listing_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import ListingComposeContainer from './listings/listing_compose_container';

import "../scss/style.scss";

const App = () => (
  <div className="App">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/process" component={Process} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/expect" component={Expect} />
      <Route exact path="/insurance-fees" component={InsuranceFees} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/appointments" component={Appointments} />
      <Route exact path="/resources" component={Resources} />



      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/listings/:id" component={ListingContainer} />
      <Route exact path="/listings" component={ListingsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_listing" component={ListingComposeContainer} />
    </Switch>
  </div>
);

export default App;