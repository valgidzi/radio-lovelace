import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';
class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.tracks
    }
  }

  moveTrackToTop = (trackId) => {
    let collection = this.state.tracks
    let clicked = collection.find(track => track.id === trackId)
    let index = collection.indexOf(clicked)
    collection.splice(index, 1)
    collection.unshift(clicked)
    this.setState({tracks: collection});
  }

  calculatePlayTime (tracks) {
    let minutes = 0;
    let seconds = 0;
    tracks.forEach((track) => {
      const times = track.playtime.split(':');
      minutes += parseInt(times[0]);
      seconds += parseInt(times[1]);
    });

    minutes += Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = ("" + seconds).padStart(2, "0");
    minutes = ("" + minutes).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }


  render() {
    const tracks = this.state.tracks;
    const trackCount = tracks.length;
    const playtime = this.calculatePlayTime(tracks);
    const trackElements = tracks.map((track) => {
      // We use "spread syntax" here to pass in all the properties of
      // the variable 'track' as props. Go look it up!
      return (
        <Track
          key={track.id}
          moveTrackToTopCallback={this.moveTrackToTop}
          {...track}
          />
      );
    });

    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <p>
          {trackCount} tracks - {playtime}
        </p>
        <ul className="playlist--track-list">
          {trackElements}
        </ul>
      </div>
    );
  }


}

Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
