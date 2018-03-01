import React, {Component} from 'react'
import City from '../components/City'
// import HouseList from './HouseList'
export default class CitiesList extends Component {


  render() {
    const cityList = this
      .props
      .CityInfo
      .map((city, index) => {
        return (<City
          key={index}
          name={city.name}
          photo={city.photo}
          state={city.state}
          country={city.country}
          id={city._id}/>)
      })
    return (
      <div>
        <div>{cityList}
        </div>
      </div>
    )
  }
}
