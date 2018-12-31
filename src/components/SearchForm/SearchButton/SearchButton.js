import React, { Component } from 'react'

import { searchButton } from './SearchButton.module.css'

class SearchButton extends Component {
  componentDidMount() {
    // console.log('SearchButton mounted')
  }

  render() {
    // const {  } = this.props

    return (
      <button className={searchButton} type="submit">
        SEARCH
      </button>
    )
  }
}

export default SearchButton
