import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import SearchResultsWithData from '../../components/SearchResults/SearchResults'
import {
  app,
  // header,
  mainContainer,
} from './index.module.css'
import SearchForm from '../../components/SearchForm/SearchForm'

class MainPage extends Component {
  state = {
    searchTerm: '',
  }

  onSubmitHandler = (event) => {
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
          <SearchForm onSubmit={this.onSubmitHandler} />
        </main>
        {searchTerm
          && <SearchResultsWithData title={searchTerm} fields="original_title id" />
        }
      </div>
    )
  }
}

export default MainPage
