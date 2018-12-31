// @flow

import React from 'react'
import GetMovieByID from '../QueriesHOC/GetMovieByID'

export type SmallMovieCardProps = {
  movieByID: {
    original_title: string,
  }
}

export const SmallMovieCard = ({ movieData }: SmallMovieCardProps) => (
  <>
    <div>{movieData && movieData.original_title}</div>
  </>
)

const SmallMovieCardWithData = GetMovieByID(SmallMovieCard)

export default SmallMovieCardWithData
