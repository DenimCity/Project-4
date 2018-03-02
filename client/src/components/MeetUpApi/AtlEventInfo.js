import React, {Component} from 'react'
import styled from 'styled-components'
import { TableWrapper, Table, Column, ColumnTitle, Holder, LinkTag} from '../../basicstyledcomponents/basicComponents'

export default class AtlEventInfo extends Component {
  render() {
    return (
      <div>
        <div>
          {this
            .props
            .atlEvents
            .map((event) => {
              return (
                <div>

                  <Table>
                    <Column>
                      <ColumnTitle>Name</ColumnTitle>
                      {this
                        .props
                        .atlEvents
                        .map(event => {
                          return <Holder>{event.name}</Holder>
                        })}
                    </Column>
                    <Column>
                      <ColumnTitle>Number of Members</ColumnTitle>
                      {this
                        .props
                        .atlEvents
                        .map(event => {
                          return <Holder>{event.members}</Holder>
                        })}
                    </Column>
                    <Column>
                      <ColumnTitle>Categories</ColumnTitle>
                      {this
                        .props
                        .atlEvents
                        .map(event => {
                          return <Holder>{event.category.name}</Holder>
                        })}
                    </Column>

                    <Column>
                      <ColumnTitle>Link</ColumnTitle>
                      {this
                        .props
                        .atlEvents
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

