import React, { Component } from 'react'
import load from './Spinner-3.gif'
export default class Spinner2 extends Component {
  render() {
    return (
      <div>
            <div className="container" style={{textAlign:"center"}}>
            <img src={load} alt="Loading..." />
        </div>
      </div>
    )
  }
}

