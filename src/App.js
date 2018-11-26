import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './screens/MainPage/MainPage'
import Movie from './screens/Movie/Movie'
import Graph from './screens/Graph/Graph'

class App extends Component {
  componentDidMount() {
  // console.log('to do.. to do.. to do to do to do to do to doooo')
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/graph" component={Graph} />
        <Route path="/movie/:movieId" component={Movie} />
        {/* <Route path="/watchlist" component={Watchlist} /> */}
      </Switch>
    )
  }
}

export default App
