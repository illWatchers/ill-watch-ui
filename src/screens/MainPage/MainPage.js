import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { app, header } from './index.module.css'

class MainPage extends Component {
  componentDidMount() {
    // console.log('to do.. to do.. to do to do to do to do to doooo')
  }

  render() {
    return (
      <div className={app}>
        <header className={header}>
          <p>
            ill watch ui based on CRA v.2
          </p>
          <p>
            <Link to={`/movie/${Math.round(Math.random() * 10)}`}>
              Go to random movie
            </Link>
          </p>
        </header>
      </div>
    )
  }
}

export default MainPage
