import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailList from '../detailbox/detail_list';
import DetailDropdown from '../detailbox/detail_dropdown';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      categories: {}
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchListing(id);
  }



  componentDidUpdate(prevProps){
    if (this.props.listing._id !== prevProps.listing._id) {
      // const id = this.props.match.params.id;
      this.setState({ listing: this.props.listing });
    }
  }

  makeArraysForComponents() {
    const detailCategories = ['colors', 'finishes', 'length', 'shapes', 'size', 'styles']
    detailCategories.forEach(detail => {
      if (this.state.listing[detail]) {
        // this.setState({ categories[detail]: (Object.keys(this.props.listing[detail]).filter(el => this.props.listing[detail][el])});
        this.setState({
          ...this.state.categories,
          [detail]: Object.keys(this.state.listing[detail])
                          .filter(el => this.state.listing[detail][el]),
        })
      }
    })
  }

  // componentWillReceiveProps(newState) {
  //   this.setState({ listing: newState.listing })
  //   this.makeArraysForComponents()
  //   // console.log(this.props)
  // }

  render() {
    if (Object.keys(this.state.listing) === 0) {
      return (<div>Loading...(If product does not display reload page)</div>)
    } else {
      this.makeArraysForComponents()

      // console.log(this.state)
      return (
        <div>
            <h1>
              {this.state.listing.title}
            </h1>
            <h2>${this.state.listing.price}</h2>
            <p>{this.state.listing.text}</p>
              <DetailList key='colors' name='colors' details={this.state.categories.colors}/>
              {/* <DetailList key='finishes' name='finishes' details={this.state.categories.finishes}/> */}
              <DetailList key='styles' name='styles' details={this.state.categories.styles}/>
            
            <form onSubmit={this.handleSubmit}>
              <DetailDropdown key='size' name='size' options={this.state.categories.size}/>
              <br/>
              <DetailDropdown key='length' name='length' options={this.state.categories.length}/>
              <br/>
              <DetailDropdown key='shapes' name='shapes' options={this.state.categories.shapes}/>
              <br/>
              <DetailDropdown key='finishes' name='finishes' options={this.state.categories.finishes}/>
          
            </form>
            
            <p>Listing Status: {this.state.listing.listingstatus}</p>

        </div>
      );
    }
  }
}

export default withRouter(Listing);
