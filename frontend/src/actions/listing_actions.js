import { getListing, getListings, getUserListings, writeListing } from '../util/listing_api_util';

export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";
export const RECEIVE_NEW_LISTING = "RECEIVE_NEW_LISTING";

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

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

export const fetchListing = id => dispatch => (
  getListing(id)
    .then(listing => dispatch(receiveListing(listing)))
    .catch(err => console.log(err))
);

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