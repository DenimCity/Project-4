import React, {Component} from 'react'
import City from '../CityFolder/City'
import axios from 'axios'
import styled from 'styled-components'
export default class CitiesList extends Component {
  state = {
    cities: [],
    isLoading: true
  }

  citiesFromServer = () => {
    axios
      .get(`/homecoming/city/`)
      .then(response => {
        const cities = response.data
        this.setState({cities, isLoading: false})
      })
  }
  componentWillMount() {
    setTimeout(() => {
      this.citiesFromServer()
    }, 300);

  }

  render() {
    if (this.state.isLoading) {
      return <Loading>
        <img
          src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"
          alt=""/>
      </Loading>
    }

    const cityList = this
      .state
      .cities
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

const Loading = styled.div `
display: flex;
    justify-content: center;
    flex-wrap: wrap;

`