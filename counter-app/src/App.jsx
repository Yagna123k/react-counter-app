
import React from 'react'
import './App.css'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
    this.count = 0
  }
  incre = ()=>{
    this.setState({
      count :this.state.count+1
    })
  }
  desc = ()=>{
    if(this.state.count>0){
      this.setState({
        count :this.state.count-1
      })
    }
  }
  reset = ()=>{
    this.setState({
      count:0
    })
  }
  render(){
    return <>
    <h1>Counter App</h1>
    <h1 id='count'>{this.state.count}</h1>
    <button id='inc' onClick={this.incre}>+</button>
    <button id='des' onClick={this.desc}>-</button>
    <button id='reset' onClick={this.reset}>Reset</button>
    </>
  }

}
