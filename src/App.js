import React, { Component } from 'react';
import Goals from './Goals';
import './App.css';
import GoalService from './services/GoalServie';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.goalsService = new GoalService(".");
        this.state = {
            term: '',
            items: []
        };

    }

    componentDidMount() {
        let newItems = this.goalsService.getGoals();
        this.setState({ items: newItems})

    };

    onChange = (event) => {
        this.setState({term: event.target.value});
    };

    onKeyDown = (event) => {
      if(event.keyCode !== 13){
        return;
      }

      event.preventDefault();

      const newGoal = this.state.term.trim();

        if(newGoal){
          this.setState({
              term:'',
              items:[...this.state.items, newGoal]
          });

            this.goalsService.updateGoals(newGoal);
        }
    }

    onRemove = (i) => {
      let result =this.state.items.slice().filter((item,index) => index !== i);
      this.setState({
        items: result
      });
    }

  render() {
      return (
          <div className="App">
              <Navbar inverse fixedTop>
                   <Grid>
              <Navbar.Header>
              <Navbar.Brand>
                 <a href="/">Sprint Goals</a>
              </Navbar.Brand>
              <Navbar.Toggle />
              </Navbar.Header>
              </Grid>
              </Navbar>
              <Jumbotron>
              <Grid>
              <div>
              <div className="row">
              </div>
              <div className="col-lg-6">
              <div className="input-group">
              <span className="input-group-addon">
              <input type="checkbox"/>
              </span>

              <input className="form-control" value={this.state.term} onChange={this.onChange} onKeyDown={this.onKeyDown} palceholder="new goal"/>
              </div>
              </div>
              </div>
              </Grid>
              </Jumbotron>


              <Goals goals={this.state.items} onRemove={(i) => this.onRemove(i)}/>
          </div>
    );
  }
}

export default App;
