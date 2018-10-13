import React, { Component } from 'react'

import { app, header } from './index.module.css'

class App extends Component {
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
        </header>
      </div>
    )
  }
}

export default App
