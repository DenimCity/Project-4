import React, { Component } from 'react'
import { Table, Column, ColumnTitle, Holder, LinkTag} from '../../basicstyledcomponents/basicComponents'

export default class NewYorkEventInfo extends Component {
  render() {
    return (
      <div>
      <div>
        {this
          .props
          .newYorkEvents
          .map((event) => {
            return (
              <div>
                <Table>
                  <Column>
                    <ColumnTitle>Name</ColumnTitle>
                    {this
                      .props
                      .newYorkEvents
                      .map(event => {
                        return <Holder>{event.name}</Holder>
                      })}
                  </Column>
                  <Column>
                    <ColumnTitle>Number of Members</ColumnTitle>
                    {this
                      .props
                      .newYorkEvents
                      .map(event => {
                        return <Holder>{event.members}</Holder>
                      })}
                  </Column>
                  <Column>
                    <ColumnTitle>Categories</ColumnTitle>
                    {this
                      .props
                      .newYorkEvents
                      .map(event => {
                        return <Holder>{event.category.name}</Holder>
                      })}
                  </Column>
                  <Column>
                    <ColumnTitle>Link</ColumnTitle>
                    {this
                      .props
                      .newYorkEvents
                      .map(event => {
                        return <Holder>
                          <LinkTag href={event.link} target="blank">
                            Click Here</LinkTag>
                        </Holder>
                      })}
                  </Column>
                </Table>
              </div>
            )
          })}
      </div>
    </div>
    )
  }
}
