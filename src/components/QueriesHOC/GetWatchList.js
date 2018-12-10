// @flow

import * as React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import type { WatchListProps } from '../WatchList/WatchList'

const Container = (Wrapped: React.ComponentType<WatchListProps>) => () => (
  <Query
    query={gql`{ watchlist }`}
    errorPolicy="all"
  >
    {({ data }) => (<Wrapped {...data} />)}
  </Query>
)

export default Container
