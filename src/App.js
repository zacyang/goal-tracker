import React, { Component } from 'react';
import logo from './logo.svg';
import Goals from './Goals';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        }
    }

    onChange = (event)=> {
        this.setState({term: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log([...this.state.items, this.state.term]);
        this.setState({
            term:'',
            items:[...this.state.items, this.state.term]
        });
    }

  render() {
      return (
          <div>
            <form className="App" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange}/>
              <button> Submit</button>
            </form>

              <Goals items={this.state.items}/>

              </div>

    );
  }
}

export default App;
