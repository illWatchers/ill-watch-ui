import React from 'react'
import GetWatchList from '../QueriesHOC/GetWatchList'

export const WatchList = ({ movieByID, watchlist }: any) => (
  <>
    <div>{movieByID && movieByID.original_title}</div>
    <div>{watchlist}</div>
  </>
)

const WatchListWithData = GetWatchList(WatchList)
export default WatchListWithData
