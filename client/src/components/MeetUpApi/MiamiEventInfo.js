import React, {Component} from 'react'

export default class MiamiEventInfo extends Component {
  render() {
    return (
      <div>
      <table>
        <boody>
          <tr>
            <th>Name</th>
            <th>Number of Members</th>
            <th>Categories</th>
            <th>Link</th>
          </tr>
          {this
          .props
          .miamiEvents.map((event, index)=> {
            return (
              <tr>
                <td key={index}> <h5 >{event.name}</h5> </td>
                <td><h5> {event.name} </h5></td>
                <td><h5>{event.category.name}</h5></td>
                <td> <h5> <a href={event.link} target="blank"> Click Here</a></h5> </td>
              </tr> ) })}
        </boody>
      </table>
    </div>
    )
  }
}


