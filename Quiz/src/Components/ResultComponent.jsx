import React, { Component } from 'react'
import "./ResultComponent.css"

export default class ResultComponent extends Component {
  render() {
    return (
    <div className='result'>  
      <h1 className='heading'>Result</h1>
      <div className='result-box'>
        <h3 id='comment'>You need more Practice!</h3>
        <h1 id='score-declare'>Your score is <span>20</span>%</h1>
        <div id='detailed-results'>
          <div className='details'>
            <h4>Total number of questions</h4>
            <h4>15</h4>
          </div>
          <div className='details'>
            <h4>Number of attempted questions</h4>
            <h4>9</h4>
          </div>
          <div className='details'>
            <h4>Number of corrected answers</h4>
            <h4>3</h4>
          </div>
          <div className='details'>
            <h4>Number of wrong answers</h4>
            <h4>6</h4>
          </div>
        </div>
      </div>
      <div className='result-actions'>
        <button id='playAgain-btn' className='result-action-btn'>Play Again</button>
        <button id='backToHome-btn' className='result-action-btn'>Back to Home</button>
      </div>
    </div>
    )
  }
}
