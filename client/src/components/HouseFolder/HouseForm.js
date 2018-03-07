import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
export default class HouseForm extends Component {

  state = {
    cities:[],
    newHouse:{
      "house_photo":'',
      "amenities":'',
      "description":'',
      "address":'',
      "price":'',
      "owner_photo":'',
      "owner_phone":'',
  },
    houses:[],
    value:'',

    redirect: false
  }

  citiesFromServer = () => {
    axios
      .get(`/homecoming/city/`)
      .then(response => {
        const cities = response.data
        console.log('the cities are',cities);
        this.setState({cities})
      })
  }

  componentWillMount = () => {
    this.citiesFromServer()
  }

  handleChange = (event) => {
    const attribute = event.target.name
    let val = event.target.value
    const newHouse = {
      ...this.state.newHouse
    }
    newHouse[attribute] = val
    console.log('handle change',newHouse)
    this.setState({newHouse})
  }
 

  createAHouse = () => {
    console.log('create house',);
    const cityId = this.getCityId(this.state.newHouse.cities)

    axios.post(`/homecoming/city/${cityId}/houses/new`, this.state.newHouse)
      .then(response => {
        const newHouse = response.data
        console.log('the new house data', newHouse);
        const houses = [...this.state.houses]
      console.log('the current houses are',this.state)
        houses.push(newHouse)
        this.setState({houses})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getCityId = (cityName) => {
    const city = this.state.cities.find(city =>  city.name === cityName)
     return city._id

    }
  
  handleSubmit = (event) => {
    this.createAHouse()
    event.preventDefault()
    this.setState({newHouse: this.state.newHouse})
  }
  

  render() {
    const cityList = ()=>{
      if(this.state.cities){
        return this.state.cities.map((city)=> {
          return(
            <option key={city._id} value={city.name}>{city.name}</option> 
          )
        })
      }
    }

    if (this.state.redirect) {
      return <Redirect to="/"/>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="house_photo"
              placeholder="House Photo"
              
              required
              value={this.state.house_photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="amenities"
              placeholder="amenities"
             
              required
              value={this.state.amenities}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="description"
              placeholder="Enter description"
              value={this.state.description}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="address"
              placeholder="Enter address"
              default="367 Kuhic River"
              value={this.state.newHouse.address}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="price"
              placeholder="Monthly price"
              value={this.state.newHouse.price}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="owner_photo"
              placeholder="Enter your photo.."
              default="https://i.imgur.com/G80lKgk.jpg"
              value={this.state.newHouse.owner_photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="owner_phone"
              placeholder="Enter your phone number.."
             
              default="999-999-999"
              value={this.state.newHouse.owner_phone}/>
          </div>
          <select onChange={this.handleChange} name="cities">{cityList()}</select>
          <button type="submit">
            Submit
          </button>
          <a href="/">
            <button>Cancel</button>
          </a>
        </form>
      </div>
    )
  }
}

