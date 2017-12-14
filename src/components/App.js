import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Piglist from './Piglist'
import Pigrow from './Pigrow'
import {getAll} from '../porkers_data.js'



class App extends Component {
  constructor(){
    super();
    this.state = {
      pigs: []
    }
  }

  componentDidMount(){
    this.setState({
      pigs: getAll()
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <div></div>
        <Piglist pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
