// @flow

import React from 'react'
import GetWatchList from '../QueriesHOC/GetWatchList'

export type WatchListProps = {
  watchlist: string,
  movieByID: {
    original_title: string,
  }
}

export const WatchList = ({ movieByID, watchlist }: WatchListProps) => (
  <>
    <div>{movieByID && movieByID.original_title}</div>
    <div>{watchlist}</div>
  </>
)

const WatchListWithData = GetWatchList(WatchList)
export default WatchListWithData
