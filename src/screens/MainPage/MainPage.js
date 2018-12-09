import React, { Component } from 'react'
import {
  app,
  mainContainer,
} from './index.module.css'
import SearchForm from '../../components/SearchForm/SearchForm'

class MainPage extends Component {
  componentDidMount() {
    // console.log('to do.. to do.. to do to do to do to do to doooo')
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('search')
    console.log('searchTerm', searchTerm)
  }

  render() {
    return (
      <div className={app}>
        <main className={mainContainer}>
          <SearchForm />
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
