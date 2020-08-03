import axios from 'axios';

export const getListing = id => {
  return axios.get(`/api/listings/${id}`)
};

export const getListings = () => {
  return axios.get(`/api/listings`)
};

export const getUserListings = id => {
  return axios.get(`/api/listings/user/${id}`)
};

export const writeListing = data => {
  return axios.post('/api/listings/', data)
}