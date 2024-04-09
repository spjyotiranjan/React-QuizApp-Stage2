import React, { Component } from 'react'
import "./HomeComponent.css"

export default class HomeComponent extends Component {

  render() {
    return (
      <div className='home'>
        <h1 className='title'>Quiz App</h1>
        <button className='play'>Play</button>
      </div>
    )
  }
}
