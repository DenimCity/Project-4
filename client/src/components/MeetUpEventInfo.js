import React, {Component} from 'react'
// import MeetUpSingle from './MeetUpSingle'
import styled from 'styled-components'
import {Table} from 'semantic-ui-react'

export default class MeetupEventInfo extends Component {
  render() {
    return (
      <div>
        {this
          .props
          .atlEvents
          .map((event) => {
            return (
              <div>
                <div>
                <table class="ui single line table">
                  <thead class="">
                    <tr class="">
                      <th class="">Name</th>
                      <th class="">Number of Members</th>
                      <th class="">Category</th>
                      <th class="">Link</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr class="">
                      <td class="">{event.name}</td>
                      <td class="">{event.members}</td>
                      <td class="">{event.category.name}</td>
                      <td class=""><a href={event.link} targert="blank">Link</a></td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            )
          })
}

      </div>
    )
  }
}

{/* <div class="wrapper">

  <div class="table">

    <div class="row header">
      <div class="cell">
      Name
      </div>
      <div class="cell">
      Number of Members
      </div>
      <div class="cell">
      Category
      </div>
      <div class="cell">
      Link

      </div>
    </div>

    <div class="row">
      <div class="cell" data-title="Name">
        {event.name}
      </div>
      <div class="cell" data-title="Age">
        {event.members}
      </div>
      <div class="cell" data-title="Occupation">
      {event.category.name}
      </div>
      <div class="cell" data-title="Location">
      <a href={event.link} target="blank">Link</a>
      </div>
    </div>
    </div>

    </div> */
}

//   <div class="row">     <div class="cell" data-title="Name">       Joseph
// Smith     </div>     <div class="cell" data-title="Age">       27     </div>
// <div class="cell" data-title="Occupation">       Project Manager </div> <div
// class="cell" data-title="Location">       Somerville, MA </div>   </div>
// <div class="row">     <div class="cell" data-title="Name">      Maxwell
// Johnson  </div>     <div class="cell" data-title="Age"> 26     </div> <div
// class="cell" data-title="Occupation">       UX Architect & Designer </div>
// <div class="cell" data-title="Location">      Arlington, MA </div>   </div>
// <div class="row">     <div class="cell" data-title="Name">      Harry
// Harrison     </div>     <div class="cell" data-title="Age"> 25     </div>
// <div class="cell" data-title="Occupation">       Front-End Developer </div>
// <div class="cell" data-title="Location"> Boston, MA     </div> </div> </div>
// const Table = styled.table` font-family: arial, sans-serif; border-collapse:
// collapse;     width: 100%;   td, tr {       border: 1px solid #dddddd;
// text-align: left; padding: 8px;     &:nth-child(even){ background-color:
// white;     } } ` const description = styled.p` `