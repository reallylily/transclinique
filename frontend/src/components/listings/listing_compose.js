import React from 'react';
import ListingBox from './listing_box';

class ListingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newListing: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newListing: nextProps.newListing.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let listing = {
      text: this.state.text
    };

    this.props.composeListing(listing); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Title..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <ListingBox text={this.state.newListing} />
        </div>
    )
  }
}

export default ListingCompose;
