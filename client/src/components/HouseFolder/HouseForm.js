import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
export default class HouseForm extends Component {

  state = {
    cities:[],
    newHouse:{
      house_photo:'',
      amenities:'',
      description:'',
      address:'',
      price:'',
      owner_photo:'',
      owner_phone:'',
  },
    houses:[],

    redirect: false
  }

  citiesFromServer = () => {
    axios
      .get(`/homecoming/city/`)
      .then(response => {
      this.setState({ cities:response.data })
      })
  }

  componentWillMount = () => {
    this.citiesFromServer()
  }

  handleChange = ( event ) => {
    
    const attribute = event.target.name
    const value = event.target.value
    const newHouse = {
      ...this.state.newHouse
    }
    newHouse[attribute] = value
   
    this.setState({newHouse})
  }
 

  createAHouse = () => {
    const cityId = this.getCityId(this.state.newHouse.cities)
    axios.post(`/homecoming/city/${cityId}/houses/new`, this.state.newHouse)
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

  getCityId = (cityName) => {
    const city = this.state.cities.find(city =>  city.name === cityName)
     return city._id

    }
  
  handleSubmit = (event) => {
  this.createAHouse()
    event.preventDefault()
    this.setState({redirect: true })
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
      return <Redirect to="/housepending"/>
    }
    return (
      <Container>
        <h1>New House Form </h1>
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Input
              onChange={this.handleChange}
              name="house_photo"
              placeholder="House Photo"
              
              required
              value={this.state.house_photo}
              />
          </div>
          <div>
            <Input
              onChange={this.handleChange}
              name="amenities"
              placeholder="Enter your amenities"
             
              required
              value={this.state.amenities}/>
          </div>
          <div>
            <Input
              onChange={this.handleChange}
              name="description"
              placeholder="Enter description"
              required
              value={this.state.description}/>
          </div>
          <div>
            <Input
              onChange={this.handleChange}
              name="address"
              placeholder="Enter address"
              default="367 Kuhic River"
              required
              value={this.state.newHouse.address}/>
          </div>
          <div>
            <Input
              onChange={this.handleChange}
              name="price"
              placeholder="Enter Monthly price"
              required
              value={this.state.newHouse.price}/>
          </div>
          <div>
            <Input
              onChange={this.handleChange}
              name="owner_photo"
              placeholder="Enter your photo.."
              default="https://i.imgur.com/G80lKgk.jpg"
              value={this.state.newHouse.owner_photo}/>
          </div>
          <div>
            <Input
              onChange={this.handleChange}
              name="owner_phone"
              placeholder="Enter your phone number.."
             
              default="999-999-999"
              required
              value={this.state.newHouse.owner_phone}/>
          </div>
          <ButtonContainer>

          <select onChange={this.handleChange} name="cities">{cityList()}</select>
          <button type="submit">
            Submit
          </button>
          </ButtonContainer>
        </form>
      </FormContainer>
      <br/>
          <a href="/">
            <button>Cancel</button>
          </a>
      </Container>
    )
  }
}

const Input = styled.input`
cursor: pointer;
width: 45vw;
padding: 3vh;
text-align: center;
border-radius: 5px;
box-shadow: 3px 2px 1px 0px;
margin-bottom: 1vh;
font-size: 2vw;
&:hover{
font-size: 15px;
}

`
const FormContainer = styled.div`
display:flex;
align-items:center;


`
const ButtonContainer = styled.div`
display:flex;
justify-content:center;

`

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center
`
