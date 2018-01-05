import React, {Component} from 'react';
class Goals extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <ul>
            {
                this.props.goals.map((item, index) =>
                (<li key={index}>{item}
                  <button onClick={(event)=>this.props.onRemove(index)}>X</button>
                </li>) )
            }
        </ul>
    );
  }
}

export default Goals;
