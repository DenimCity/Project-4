import React, {Component} from 'react'

export default class HouseList extends Component {
  render() {
    console.log('props', this.props.houses)
    return (
      <div>
        <div>
          <h1>{this.amenities}</h1>
        </div>
      </div>
    )
  }
}
