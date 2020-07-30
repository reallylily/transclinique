import React from 'react';
import ListingBox from './listing_box';

class ListingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: '',
          text: "",
          storepolicy: '',
          listingstatus: '',
          newListing: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newListing: nextProps.newListing});
  }

  handleSubmit(e) {
    e.preventDefault();
    let listing = {
      title: this.state.title,
      text: this.state.text,
      storepolicy: this.state.storepolicy,
      listingstatus: this.state.listingstatus,
    };

    this.props.composeListing(listing); 
    this.setState({
      title: '',
      text: '',
      storepolicy: '',
      listingstatus: '',
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
                    placeholder="Title (Required Field)"
                  />
                  <br/>

                  Description      
                  <input type="textarea" 
                    value={this.state.text}
                    onChange={this.update('text')}
                    placeholder="Enter text here"
                  />
                  <br/>

                  Store Policy, Fees and Shipping Details:
                  <input type="textarea" 
                    value={this.state.storepolicy}
                    onChange={this.update('storepolicy')}
                    placeholder="Enter text here"
                  />
                  <br/>

                  Listing Status:
                  <input type="textarea" 
                    value={this.state.listingstatus}
                    onChange={this.update('listingstatus')}
                    placeholder="Enter text here"
                  />
                  <br/>
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
