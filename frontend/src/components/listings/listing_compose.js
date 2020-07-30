import React from 'react';
import ListingBox from './listing_box';

class ListingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: '',
          text: "",
          newListing: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      // this.setState({newListing: nextProps.newListing});
      this.setState({newListing: nextProps.newListing});
  }

  handleSubmit(e) {
    e.preventDefault();
    let listing = {
      title: this.state.title,
      text: this.state.text,
    };

    this.props.composeListing(listing); 
    this.setState({
      title: '',
      text: '',
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                  Title
                  <input type="textarea"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Title..."
                  />
                  Description      
                  <input type="textarea" 
                    value={this.state.text}
                    onChange={this.update('text')}
                    placeholder="Description"
                  />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <ListingBox listing={this.state.newListing} />
        </div>
    )
  }
}

export default ListingCompose;
