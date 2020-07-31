import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingBox from './listing_box';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {}
    }
  }

  componentWillMount() {
    this.props.fetchListing(this.props.listing.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ listing: newState.listing });
  }

  render() {
    return (
        <div>
            <h1>{this.state.listing.title}</h1>
        </div>
    )
  }
}

export default withRouter(Listing);
