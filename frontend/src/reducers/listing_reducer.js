import { RECEIVE_LISTING, } from '../actions/listing_actions';
  
  const ListingReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_LISTING:
        newState = action.listing.data;
        // newState.listing = action.listing.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default ListingReducer;