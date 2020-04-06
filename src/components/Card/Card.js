import './Card.css';

import React, {
  Component
} from 'react';

class Card extends Component {
  render() {
    return (
      <div style={this.props.style} className="card">

        <div className="default">
          <img className="workLogo" src={this.props.image}/>
        </div>

        <div className="hover">
          <h5 className="job-title">{this.props.jobTitle}</h5>
          <p className="job-date">{this.props.jobDate}</p>
          <p className="job-description">{this.props.jobDescription}</p>
          <a className="job-link" href={this.props.jobLink}>Link to company.</a>
        </div>

      </div>
    )
  }
}

export default Card
