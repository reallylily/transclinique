import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings';

const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.listings.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
