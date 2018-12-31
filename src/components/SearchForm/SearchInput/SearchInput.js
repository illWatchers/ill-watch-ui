import React, { Component } from 'react'
import { searchField } from './SearchInput.module.css'

/* eslint-disable */

class SearchInput extends Component {
  render() {
    return (
      <input
        className={searchField}
        type="search"
        placeholder="What will you watch next?"
        name="search"
      />
    )
  }
}

export default SearchInput
