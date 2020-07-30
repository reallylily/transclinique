import React from 'react';
import ListingBox from '../listings/listing_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listings: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserListings(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ listings: newState.listings });
    }   
    
    render() {
        if (this.state.listings.length === 0) {
          return (<div>This user has no listings</div>)
        } else {
          return (
            <div>
              <h2>All of This Artist's Listings</h2>
              {this.state.listings.map(listing => (
                <ListingBox key={listing._id} listing={listing} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
