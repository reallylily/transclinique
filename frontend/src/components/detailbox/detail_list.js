
import React from 'react';

class DetailList extends React.Component {
  render() {
    let details = this.props.details
    if (details === undefined) {
      return (<div>fetching details...</div>)
    } else {
      return (
        <div>
          <span>{this.props.name}: </span>
          <p>
            {details.map((el, i, arr)=> ((i !== arr.length - 1) ? el += ', ' : el))}
          </p>
        </div>
    );
    }
  }

}

export default DetailList;
