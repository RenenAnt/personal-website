import '../App.css';

import React, {
  Component
} from 'react';

class MusicCard extends Component {
  goToTrack(link) {
      window.location.href = link;
  }

  render() {
    return (
      <div style={this.props.style} className={"musicCard"}>
        <img onClick={() => this.goToTrack(this.props.link)}  className="musicArtwork" src={this.props.image}/>
      </div>
    )
  }
}

export default MusicCard
