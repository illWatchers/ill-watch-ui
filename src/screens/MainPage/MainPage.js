import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import WatchListQuery from '../../graphql/QueriesHOC/WatchList'
import MovieById from '../../graphql/QueriesHOC/MovieById'
import { app, header } from './index.module.css'

const WithWatchList = () => WatchListQuery(data => (
  <span>{data.watchlist}</span>
))

const WithMovie = ({ movieByID }) => MovieById(data => (
  <span>{data && data.movieByID && data.movieByID.original_title}</span>
), movieByID)

class MainPage extends Component {
  componentDidMount() {
    // console.log('to do.. to do.. to do to do to do to do to doooo')
  }

  render() {
    return (
      <div className={app}>
        <header className={header}>
          <p>
            ill watch ui based on CRA v.2
          </p>
          <p>
            <Link to={`/movie/${Math.round(Math.random() * 10)}`}>
              Go to random movie
            </Link>
          </p>
          <WithWatchList />
          <WithMovie movieByID={550} />
        </header>
      </div>
    )
  }
}

export default MainPage
