import React, { Component } from 'react'
import * as d3 from 'd3'

class Graph extends Component {
  componentDidMount() {
    this.createGraph()
    console.log('this.rootRef DDIIIIIID', this.rootRef)
  }

  componentWillUnmount() {

  }

  createGraph = () => {
    // d3.select(this.rootRef.root().node())
    //   .attr('width', `${500}px`)
    //   .attr('height', `${500}px`)
    //   .append('g')
    //   .attr('transform', `translate(${300}, ${10})`)
  }

  updateGraph = () => {

  }

  render() {
    console.log('this.rootRef', this.rootRef)
    return (
      <div
        ref={(ref) => { this.rootRef = ref }}
      >
        {'aa'}
      </div>
    )
  }
}

export default Graph
