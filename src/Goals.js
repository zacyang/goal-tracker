import React, {Component} from 'react';
class Goals extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <ul className="list-group">
            <a href="#" className="list-group-item disabled">
            current goals
        </a>
            {
                this.props.goals.map((item, index) =>
                                     (<a href="#" className="list-group-item" key={index}>{item}
                                      <a className="glyphicon glyphicon-minus" onClick={(event)=>this.props.onRemove(index)}></a>
                </a>) )
            }
        </ul>
    );
  }
}

export default Goals;
