// @flow

import * as React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import type { SmallMovieCardProps } from '../Movie/SmallMovieCard'

type Props = {
  movieID: number,
  fields: string,
}

const GetMovieByID = (Wrapped: React.ComponentType<SmallMovieCardProps>) => ({
  movieID,
  fields,
}: Props) => (
  <Query
    query={gql`{
      movieByID(movieID: ${movieID}) {
        ${fields}
      }
    }`}
    errorPolicy="all"
  >
    {({ data }) => (<Wrapped {...data} />)}
  </Query>
)

export default GetMovieByID
