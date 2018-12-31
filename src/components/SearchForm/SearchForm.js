import React, { Component } from 'react'

import { searchForm } from './SearchForm.module.css'
import SearchButton from './SearchButton/SearchButton'
import SearchInput from './SearchInput/SearchInput'

class SearchForm extends Component {
  componentDidMount() {
    // console.log('Search mounted')
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { onSubmit } = this.props

    return (
      <form className={searchForm} onSubmit={onSubmit}>
        <SearchInput />
        <SearchButton />
        {/* */}
      </form>
    )
  }
}

export default SearchForm
