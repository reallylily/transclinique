import React from 'react';

class ListingBox extends React.Component {
  render() {
    return (
        <div>
            <h2>{this.props.listing.title}</h2>
            <h3>{this.props.listing.text}</h3>
        </div>
    );
  }
}

export default ListingBox;
