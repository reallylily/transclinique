import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import listings from './listings_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  listings,
});

export default RootReducer;