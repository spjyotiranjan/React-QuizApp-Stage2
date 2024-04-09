import React, { Component } from 'react'
import "./QuizComponent.css"
import Questions from "./../resources/quizQuestion.json"

export default class QuizComponent extends Component {
  constructor(){
    super()
    this.state = {
      currIndex: 1,
      questionLength: Questions.length
    }
  }
  goNext = () => {
    if(this.state.currIndex < this.state.questionLength){
      this.setState({currIndex: this.state.currIndex + 1})
    }
    if(this.state.currIndex === this.state.questionLength) {
      alert("Congrats !!, You have answered all the questions")
      this.setState({currIndex: 1})
    }
  }
  goPrevious = () => {
    if(this.state.currIndex > 1){
      this.setState({currIndex: this.state.currIndex - 1})
    }
  }
  quitQuiz = () => {
    let confirmQuit = confirm("Are you sure you want to quit ?")
    if(confirmQuit){
      this.setState({currIndex: 1})
    }
  }



  render() {
    return (
      <div className='quiz'>
        <h1 id='title'>Question</h1>
        <p className='start'><span>{this.state.currIndex}</span> of <span>{this.state.questionLength}</span></p>
        <h4 id='question'>{Questions[this.state.currIndex - 1].question}</h4>
        <div className='option'>
            <button className='option-btn'>{Questions[this.state.currIndex - 1].optionA}</button>
            <button className='option-btn'>{Questions[this.state.currIndex - 1].optionB}</button>
            <button className='option-btn'>{Questions[this.state.currIndex - 1].optionC}</button>
            <button className='option-btn'>{Questions[this.state.currIndex - 1].optionD}</button>
        </div>
        <div className='action'>
            <button id='previous-btn' className='action-btn' onClick={this.goPrevious}>Previous</button>
            <button id='next-btn' className='action-btn' onClick={this.goNext}>Next</button>
            <button id='quit-btn' className='action-btn' onClick={this.quitQuiz}>Quit</button>
        </div>
      </div>
    )
  }
}
