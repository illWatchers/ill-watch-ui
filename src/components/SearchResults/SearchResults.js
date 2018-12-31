import React from 'react'
import GetMovieByTitle from '../QueriesHOC/GetMovieByTitle'
import { SmallMovieCard } from '../Movie/SmallMovieCard'

export const SearchResults = ({ moviesByTitle }: any) => (
  <ul>
    {moviesByTitle.map(movie => (
      <li key={movie.id}>
        <SmallMovieCard movieData={movie} />
      </li>
    ))}
  </ul>
)

const SearchResultsWithData = GetMovieByTitle(SearchResults)
export default SearchResultsWithData
