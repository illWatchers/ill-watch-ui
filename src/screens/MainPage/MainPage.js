import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import WatchListWithData from '../../components/WatchList/WatchList'
import SmallMovieCardWithData from '../../components/Movie/SmallMovieCard'
import {
  app,
  header,
  mainContainer,
  movieSearchForm,
  searchField,
  searchButton,
} from './index.module.css'

class MainPage extends Component {
  componentDidMount() {
    // console.log('to do.. to do.. to do to do to do to do to doooo')
  }

  onSubmitHandler = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('search')
    console.log('searchTerm', searchTerm)
  }

  render() {
    return (
      <div className={app}>
        <main className={mainContainer}>
          <form
            className={movieSearchForm}
            onSubmit={this.onSubmitHandler}
          >
            <input
              className={searchField}
              type="search"
              placeholder="What will you watch next?"
              name="search"
            />
            <button className={searchButton} type="submit">
              SEARCH
            </button>
          </form>
        </main>
        {/* <header className={header}>
          <p>
            ill watch ui based on CRA v.2
          </p>
          <p>
            <Link to={`/movie/${Math.round(Math.random() * 10)}`}>
              Go to random movie
            </Link>
            <Link to="/graph">
              To graph
            </Link>
          </p>
          <WatchListWithData />
          <SmallMovieCardWithData movieByID={550} fields="original_title" />
        </header> */}
      </div>
    )
  }
}

export default MainPage
