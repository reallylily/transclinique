import { connect } from 'react-redux';
import { fetchUserListings } from '../../actions/listing_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.listings.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserListings: id => dispatch(fetchUserListings(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
