import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Container = Wrapped => (
  <Query
    query={gql`
      {
        watchlist
      }
    `}
    errorPolicy="all"
  >
    {({ data }) => (<Wrapped {...data} />)}
  </Query>
)

export default Container
