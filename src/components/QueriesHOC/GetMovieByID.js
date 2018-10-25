import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GetMovieByID = Wrapped => ({ movieByID, fields }) => (
  <Query
    query={gql`{
      movieByID(movieID: ${movieByID}) {
        ${fields}
      }
    }`}
    errorPolicy="all"
  >
    {({ data }) => (<Wrapped {...data} />)}
  </Query>
)

export default GetMovieByID
