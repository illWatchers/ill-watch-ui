import React from 'react'
import GetMovieID from '../QueriesHOC/GetMovieByID'

export const SmallMovieCard = ({ movieByID, watchlist }: any) => (
  <>
    <div>{movieByID && movieByID.original_title}</div>
    <div>{watchlist}</div>
  </>
)

const SmallMovieCardWithData = GetMovieID(SmallMovieCard)
export default SmallMovieCardWithData
