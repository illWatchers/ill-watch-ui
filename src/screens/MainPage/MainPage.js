import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import SearchResultsWithData from '../../components/SearchResults/SearchResults'
import {
  app,
  // header,
  mainContainer,
  movieSearchForm,
  searchField,
  searchButton,
} from './index.module.css'

class MainPage extends Component {
  state = {
    searchTerm: '',
  }

  onSubmitHandler = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('search')

    this.setState({ searchTerm })
  }

  render() {
    const { searchTerm } = this.state

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
        {searchTerm
          && <SearchResultsWithData title={searchTerm} fields="original_title id" />
        }
      </div>
    )
  }
}

export default MainPage
