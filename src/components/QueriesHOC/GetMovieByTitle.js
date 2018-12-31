import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GetMoviesByTitle = Wrapped => ({ title, fields }) => (
  <Query
    query={gql`{
      moviesByTitle(title: "${title}") {
        ${fields}
      }
    }`}
    errorPolicy="all"
  >
    {({ data }) => Object.keys(data).length && <Wrapped {...data} />}
  </Query>
)

export default GetMoviesByTitle
