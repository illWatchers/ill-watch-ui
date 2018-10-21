import React, { Component } from 'react'

import { app, header } from './index.module.css'

import ClearButton from './ClearButton/ClearButton'
import SearchButton from './SearchButton/SearchButton'
import SearchInput from './SearchInput/SearchInput'

class MainPage extends Component {
  componentDidMount() {
    // console.log('Search mounted')
  }

  render() {
    return (
      <div>
        Search
      </div>
    )
  }
}

export default MainPage
