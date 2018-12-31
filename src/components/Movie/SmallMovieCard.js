import React from 'react'
import GetMovieByID from '../QueriesHOC/GetMovieByID'

export const SmallMovieCard = ({ movieData }: any) => (
  <>
    <div>{movieData && movieData.original_title}</div>
  </>
)

const SmallMovieCardWithData = GetMovieByID(SmallMovieCard)
export default SmallMovieCardWithData
