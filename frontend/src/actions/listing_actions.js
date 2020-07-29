import { getListings, getUserListings, writeListing } from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";
export const RECEIVE_NEW_LISTING = "RECEIVE_NEW_LISTING";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveUserListings = listings => ({
  type: RECEIVE_USER_LISTINGS,
  listings
});

export const receiveNewListing = listing => ({
  type: RECEIVE_NEW_LISTING,
  listing
})

export const fetchListings = () => dispatch => (
  getListings()
    .then(listings => dispatch(receiveListings(listings)))
    .catch(err => console.log(err))
);

export const fetchUserListings = id => dispatch => (
  getUserListings(id)
    .then(listings => dispatch(receiveUserListings(listings)))
    .catch(err => console.log(err))
);

export const composeListing = data => dispatch => (
  writeListing(data)
    .then(listing => dispatch(receiveNewListing(listing)))
    .catch(err => console.log(err))
);