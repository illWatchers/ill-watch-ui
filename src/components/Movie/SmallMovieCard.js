import React from 'react'
import GetMovieByID from '../QueriesHOC/GetMovieByID'

export const SmallMovieCard = ({ movieByID, watchlist }: any) => (
  <>
    <div>{movieByID && movieByID.original_title}</div>
    <div>{watchlist}</div>
  </>
)

const SmallMovieCardWithData = GetMovieByID(SmallMovieCard)
export default SmallMovieCardWithData
