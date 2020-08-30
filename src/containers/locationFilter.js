import React, {Component} from 'react';

class LocationFilter extends Component {

  showLocations = () => {
    return this.props.towns.map((town) => {
      return <option>{town}</option>
    })
  }
  render(){
    return (
     
        <div className="location-filter">
          Location filter
          <select onChange={(e) => {this.props.applyFilter(e.target.value)}}>
            <option>All</option>
            {this.showLocations()}
          </select>
          

        </div>
        

    );
  }
  
}

export default LocationFilter;
