import './Project.css';

import React, {
  Component
} from 'react';

class Project extends Component {
  render() {
    return (
      <li className="project">
        <a className="project-link" href={this.props.link}>{this.props.name}</a>
        <p className="project-description">{this.props.description}</p>
      </li>
    )
  }
}

export default Project
