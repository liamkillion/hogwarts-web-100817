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
      pigs: [],
      pigFilter: false
    }
  }

  componentDidMount(){
    this.setState({
      pigs: getAll()
    })
  }

  handleClick = (event) => {
    this.setState({pigFilter: !this.state.pigFilter})
  }

  render() {
    var pigFiltering = this.state.pigFilter ? this.state.pigs.filter(pig => pig.greased) : this.state.pigs
    debugger;
    return (
      <div className="App">
        < Nav />
      <button onClick={this.handleClick}>Greased?</button>
        <Piglist pigs={this.pigFiltering}/>
      </div>
    )
  }
}

export default App;
