import React, {Component} from 'react'
import {Table, Column, th, Holder, LinkTag} from '../../basicstyledcomponents/basicComponents'

export default class AtlEventInfo extends Component {
  render() {
    return (
        <div>
            <table>
              <tboody>
                <th>Name</th>
                <th>Number of Members</th>
                <th>Categories</th>
                <th>Link</th>
                {this
                .props
                .atlEvents.map((event, index)=> {
                  return (
                    <tr>
                      <td> <h5 key={index}>{event.name}</h5> </td>
                      <td><h5> {event.name} </h5></td>
                      <td><h5>{event.category.name}</h5></td>
                      <td> <h5> <a href={event.link} target="blank"> Click Here</a></h5> </td>
                    </tr> ) })}
              </tboody>
            </table>
      </div>
    )
  }
}

