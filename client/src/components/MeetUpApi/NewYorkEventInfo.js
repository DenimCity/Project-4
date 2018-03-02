import React, { Component } from 'react'
import styled from 'styled-components'
import { TableWrapper, Table, Column, ColumnTitle, Holder} from '../../basicstyledcomponents/basicComponents'

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
                          <a href={event.link} target="blank">
                            Click Here</a>
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
