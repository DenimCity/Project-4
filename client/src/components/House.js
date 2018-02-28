import React, { Component } from 'react'

export default class House extends Component {
  render() {
    // const {name } =this.props 
    return (
      <div>
        <h1>Amenities: {this.props.house.amenities}</h1>
        <h3>Owner: {this.props.house.owner}</h3>
      </div>
    )
  }
}
