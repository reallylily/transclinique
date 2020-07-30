import React from 'react';
import ListingBox from './listing_box';

class ListingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: '',
          text: "",
          size: {},
          // storepolicy: '',
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
      size: this.state.size,
      // storepolicy: this.state.storepolicy,
      listingstatus: this.state.listingstatus,
    };

    this.props.composeListing(listing); 
    this.setState({
      title: '',
      text: '',
      size: {},
      finishes: {},
      length: {},
      listingstatus: '',
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value 
    });
  }

  updateObj(field) {
    // console.log(this)
    return e => this.setState({ [field]: Object.assign( this.state[field] || {}, {
      [e.target.name]: e.target.checked
  } ) } );
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

                  Size:
                  Small
                  <input type="checkbox"
                    name="small" 
                    checked={!!this.state.size.small}
                    onChange={this.updateObj('size')}
                    />
                  Medium
                  <input type="checkbox"
                    name="medium" 
                    checked={!!this.state.size.medium}
                    onChange={this.updateObj('size')}
                  />                  
                  Large
                  <input type="checkbox"
                    name="large" 
                    checked={!!this.state.size.large}
                    onChange={this.updateObj('size')}
                  />                  
                  X Large
                  <input type="checkbox"
                    name="xl" 
                    checked={!!this.state.size.xl}
                    onChange={this.updateObj('size')}
                  />                  
                  XX Large
                  <input type="checkbox"
                    name="xxl" 
                    checked={!!this.state.size.xxl}
                    onChange={this.updateObj('size')}
                  />
                  <br/>                  
                  Full Set (Contact Artist)
                  <input type="checkbox"
                    name="fullset" 
                    checked={!!this.state.size.fullset}
                    onChange={this.updateObj('size')}
                  />                  
                  Custom Size (Contact Artist)
                  <input type="checkbox"
                    name="customsize" 
                    checked={!!this.state.size.customsize}
                    onChange={this.updateObj('size')}
                  />

                  
                  {/* I accept returns and exchanges
                  <input type="checkbox" value="I accept returns and exchanges"/>
                  <br/>
                  I accept PayPal
                  <input type="checkbox" value="I accept PayPal"/>
                  <br/>
                  I accept credit card(s)
                  <input type="checkbox" value="I accept credit card(s)"/>
                  <br/>
                  I accept full and custom sets for an additional fee
                  <input type="checkbox" value="I accept full and custom sets for an additional fee"/>
     
                  <br/> */}

                  {/* Store Policy, Fees and Shipping Details:
                  <input type="textarea" 
                    value={this.state.storepolicy}
                    onChange={this.update('storepolicy')}
                    placeholder="Enter text here"
                  />
                  <br/> */}
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
