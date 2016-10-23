import React, { Component } from 'react';
import './App.css';
import ceasar from './ceasar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {string:"Hello, world!",key:5}
    this.handleStringChange = this.handleStringChange.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
  }
  handleStringChange(event){
    this.setState({string: event.target.value})
  }  
  handleKeyChange(event){
    this.setState({key: parseInt(event.target.value,10)})
  }
  render() {
    return (
      <div className="App">
        <h1>Caesar Cipher</h1>
        <input 
          type="number"
          value={this.state.key}
          onChange={this.handleKeyChange} />
        <input 
          type="text"
          placeholder="Enter Text Here"
          value={this.state.string}
          onChange={this.handleStringChange} />



        <h1>{ceasar(this.state.string, this.state.key)}</h1>
      </div>
    );
  }
}

export default App;
