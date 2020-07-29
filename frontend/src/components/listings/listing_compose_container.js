import { connect } from 'react-redux';
import { composeListing } from '../../actions/listing_actions';
import ListingCompose from './listing_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newListing: state.listings.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeListing: data => dispatch(composeListing(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingCompose);
