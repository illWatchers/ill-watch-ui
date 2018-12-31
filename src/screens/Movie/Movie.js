// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import {  } from './index.module.css'

type Props = {
  match: {
    params: {
      movieId: string
    }
  }
}


class MainPage extends Component<Props> {
  componentDidMount() {
    // console.log('Movie mounted')
  }

  render() {
    const { match: { params } } = this.props

    return (
      <div>
        {`MovieId: ${params.movieId}`}
        <br />
        <Link to="/">
          Go to main page
        </Link>
      </div>
    )
  }
}

export default MainPage
