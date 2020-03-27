import '../App.css';

import React, {
  Component
} from 'react';

class Link extends Component {
  render() {
    return (
      <div style={this.props.style} className="link-container">
        <a href={this.props.link}>
          <i className = {this.props.icon}></i>
          {this.props.text}
          </a>
      </div>
    )
  }
}

export default Link
