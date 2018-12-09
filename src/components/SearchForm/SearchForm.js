import React, { Component } from 'react'

import { searchForm } from './SearchForm.module.css'
import SearchButton from './SearchButton/SearchButton'
import SearchInput from './SearchInput/SearchInput'

class SearchForm extends Component {
  componentDidMount() {
    // console.log('Search mounted')
  }

  render() {
    return (
      <form className={searchForm}>
        <SearchInput />
        <SearchButton />
        {/* */}
      </form>
    )
  }
}

export default SearchForm
