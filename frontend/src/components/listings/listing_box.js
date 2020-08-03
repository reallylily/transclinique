import { Link } from 'react-router-dom';
import React from 'react';

class ListingBox extends React.Component {
  render() {
    return (
        <div>
          <h3>
            <Link to={`/listings/${this.props.listing._id}`} key={this.props.listing._id} params={{ listing: this.props.listing }}>{this.props.listing.title}</Link>
          </h3>
            <p>${this.props.listing.price}</p>
            {/* <p>{this.props.listing.text}</p> */}
        </div>
    );
  }
}

export default ListingBox;
