import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Container = (Wrapped, movieId) => (
  <Query
    query={gql`
      {
        movieByID(movieID: ${movieId}) {
          original_title
        }
      }
    `}
    errorPolicy="all"
  >
    {({ data }) => (<Wrapped {...data} />)}
  </Query>
)

export default Container
