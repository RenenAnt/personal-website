import './Button.css';

import React, {
  Component
} from 'react';

class Button extends Component {
  render() {
    return (
      <div className={"button-container"}>
        <button style={this.props.style} className={"button"} onClick={this.props.onclick}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default Button
