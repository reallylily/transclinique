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

import ListingsContainer from './listings/listings_container';
import ListingContainer from './listings/listing_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import ListingComposeContainer from './listings/listing_compose_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
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