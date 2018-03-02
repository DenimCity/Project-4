import React, {Component} from 'react'
import House from './House'
import HouseForm from './HouseForm'
import styled from 'styled-components'
import axios from 'axios'
export default class HouseList extends Component {

  state = {
    houses: []
  }

  componentWillMount() {
    this.housesFromServer(this.props.match.params.cityId)
  }

  housesFromServer = (cityId) => {
    console.log('from the houses route')
    axios
      .get(`/homecoming/city/${cityId}/houses`)
      .then(response => {
        const houses = response.data
        console.log(`the houses data ${houses}`)
        this.setState({houses})
      })
  }

   createAHouse = async(cityId) => {
    console.log('here from the create user route');
    // const response = await axios.post(`/${cityId}/houses/new`)
    const response = await axios.post(`/cityId/houses/new`, cityId)
    //testing out destructing data
    // const newHouse = {
    //   name,
    //   amenities,
    //   description,
    //   address,
    //   zip,
    //   price,
    //   kitchen,
    //   bathroom,
    //   livingroom,
    //   owner,
    //   owner_photo,
    //   owner
    // } = response.data
    const newHouse = response.data
    const houses = [...this.state.houses]
    houses.push(newHouse)
    this.setState({houses})
  }
// working on delete route
  //
  // deleteAHouse = async(houseId) => {
  //   console.log('we hit the delete route')
  //   const response = await axios.post()
  // }

  render() {
    const makeNewHouse = () => (<HouseForm createHouse={this.createAHouse}/>)
    const housesList = this
      .state
      .houses
      .map((house, index) => {
        return (<House key={index} house={house}/>)
      })
    return (
      <HouseWrapper>
        <HouseContainer>
          {housesList}
        </HouseContainer>
      </HouseWrapper>
    )
  }
}


const HouseContainer = styled.div`
max-width: 20rem;
border: 1px solid black;

`

const HouseWrapper = styled.div`
border:solid 1px red;
display:flex;
flex-wrap:wrap;
justify-content: center;

`