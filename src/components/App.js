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
      pigFilter: false,
      porkSort: ""
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

  handleSortClick = (event) => {
    this.setState({porkSort: event.target.value})
  }

  pigSorter = (pig1, pig2) => {
    piggies = () => {if (this.state.porkSort === "name") {
      var pig1 = pig1.name.toUpperCase(); // ignore upper and lowercase
      var pig2 = pig2.name.toUpperCase(); // ignore upper and lowercase
        if (pig1 < pig2) {
          return -1;
        }
        if (pig1 > pig2) {
          return 1;
        }
    } else {
      return pig2.fridgeWeight - pig1.fridgeWeight
    }
  }
    this.state.pigsFilter ? piggies.filter(pig => pig.greased) : piggies
  }


  render() {
    const pigFiltering = [...this.state.pigs].sort(this.pigSorter)
    console.log(pigFiltering)
    return (
      <div className="App">
        < Nav />
        <button onClick={this.handleClick}>Greased?</button>
        <select onChange={this.handleSortClick}>Sort By Weight?
          <option value="weight">Weight</option>
          <option value="name">Name</option>
        </select>
        <Piglist pigs={pigFiltering}/>
      </div>
    )
  }
}

export default App;
