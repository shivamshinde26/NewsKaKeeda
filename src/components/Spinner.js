import React, { Component } from 'react'
import loading from './Settings.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{textAlign:"center"}}>
            <img src={loading} alt="Loading..." />
        </div>
      </div>
    )
  }
}
