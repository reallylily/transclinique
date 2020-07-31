import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import Listing from './listing';

const mapStateToProps = (state) => {
  return {
    listing: state.listing
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
