// @flow

import React from 'react'
import GetMovieByID from '../QueriesHOC/GetMovieByID'

export type SmallMovieCardProps = {
  watchlist: string,
  movieByID: {
    original_title: string,
  }
}

export const SmallMovieCard = ({ movieByID, watchlist }: SmallMovieCardProps) => (
  <>
    <div>{movieByID && movieByID.original_title}</div>
    <div>{watchlist}</div>
  </>
)

const SmallMovieCardWithData = GetMovieByID(SmallMovieCard)

export default SmallMovieCardWithData
