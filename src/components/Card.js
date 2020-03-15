import '../App.css';

import React, {
  Component
} from 'react';

class Card extends Component {
  render() {
    console.log(this.props.style)
    return (
      <div style={this.props.style} className={"card"}>
        <div className={"default"}>
          <img className={"workLogo"} src={this.props.image}/>
        </div>

        <div className={"hover"}>
          <p>test</p>
        </div>

      </div>
    )
  }
}

export default Card
