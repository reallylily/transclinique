
import React from 'react';

class DetailList extends React.Component {
  render() {
    let details = this.props.details
    if (details === undefined) {
      return (<div>fetching details...</div>)
    } else {
      return (
        <div>
          <h4>
            {this.props.name}
          </h4>
          <p>
            {details.map(el=> el += ', ')}
          </p>
        </div>
    );
    }
  }

}

export default DetailList;
