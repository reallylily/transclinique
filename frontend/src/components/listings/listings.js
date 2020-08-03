import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingBox from './listing_box';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  componentWillReceiveProps(newState) {
    this.setState({ listings: newState.listings });
    // console.log(this.state.listings)
  }

  render() {
    if (this.state.listings.length === 0) {
      return (<div>There are no posts</div>)
    } else {
      return (
        <div>
          <h2>Shop</h2>
          
          {this.state.listings.map(listing => (
            // <Link to={`/listing/`} key={listing._id} params={{ listing: listing }}>{listing.title}</Link>
            <ListingBox key={listing._id} listing={listing} />
            ))}
          
        </div>
      );
    }
  }
}

export default withRouter(Listing);
