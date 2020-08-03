
import React from 'react';

class DetailDropdown extends React.Component {
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {
    let options = this.props.options
    let optionComponentArray = []
    if (options === undefined) {
      return (<div>fetching options...</div>)
    } else {
      for (let i = 0; i < options.length; i++) {
          let option = options[i]
          optionComponentArray.push(<option key={i} value={option} >{option}</option>)
      }
      return ( 
        <>
            <label >
                <span >{this.props.name}: </span>
                <select name={this.props.name}
                  defaultValue='Select'
                  // onChange={this.update(this.props.name)}
                >
                  {optionComponentArray}
                </select>
            </label>
        </> 
      )
    }
  }
}

export default DetailDropdown;
