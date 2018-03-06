import React, {Component} from 'react'
// import styled from 'styled-components' import {Title, Title2,} from
// '../basicstyledcomponents/basicComponents'
import axios from 'axios'
export default class HouseForm extends Component {

  state = {
    newHouse: {},
    houses:[],

    redirect: false
  }

  handleChange = (event) => {
    const attribute = event.target.name
    let val = event.target.value
    const newHouse = {
      ...this.state.houses
    }
    newHouse[attribute] = val
    this.setState({newHouse})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this
      .state
      .createHouse(this.state.newHouse)
    this.setState({redirect: true})
  }
  createAHouse = (house_photo, amenities, description, address, price, owner_photo, owner_phone) => {
    console.log('here from the create user route');

    axios
      .post(`/homecoming/city/${this.props.cityId}/houses/new`, {
      house_photo,
      amenities,
      description,
      address,
      price,
      owner_photo,
      owner_phone
    })
      .then(response => {
        const newHouse = response.data
        const houses = [...this.state.houses]
        houses.push(newHouse)
        this.setState({houses})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    if (this.state.redirect) {
      return <a href="/"></a>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="house_photo"
              placeholder="House Photo"
              type="text"
              required
              value={this.state.newHouse.house_photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="amenities"
              placeholder="amenities"
              type="text"
              required
              value={this.state.newHouse.amenities}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="description"
              placeholder="Enter description"
              type="text"
              value={this.state.newHouse.description}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="address"
              placeholder="Enter address"
              default="367 Kuhic River"
              type="text"
              value={this.state.newHouse.address}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="price"
              placeholder="Monthly price"
              type="text"
              value={this.state.newHouse.price}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="owner_photo"
              placeholder="Enter your photo.."
              type="text"
              default="https://i.imgur.com/G80lKgk.jpg"
              value={this.state.newHouse.owner_photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="owner_phone"
              placeholder="Enter your photo.."
              type="text"
              default="999-999-999"
              value={this.state.newHouse.owner_phone}/>
          </div>

          <select name="houses">
            <option value="volvo">Atlanta</option>
            <option value="saab">Los Angeles</option>
            <option value="mercedes">New York</option>
            <option value="audi">Miami</option>
          </select>

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

// const response = await axios.post(`/${cityId}/houses/new`) const response =
// await axios.post(`/cityId/houses/new`, cityId) const newHouse = response.data
// const houses = [...this.state.houses] houses.push(newHouse)
// this.setState({houses})
