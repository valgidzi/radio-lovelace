import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends React.Component {
  constructor(props) {
    super(props);

    const playlists = {
      morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
      eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
    };

    this.state = {
      morning: playlists.morningTracks,
      evening: playlists.eveningTracks
    }
  }
  render() {
    console.log(`Radio set for ${this.props.tracks.length} tracks`);


    const onSwitchPlaylist = (trackId, side) => {
      let morning = this.state.morning
      let evening = this.state.evening

      let removeFromCollection = side === "Morning" ? morning : evening
      let clicked = removeFromCollection.find(track => track.id === trackId)
      let index = removeFromCollection.indexOf(clicked)
      removeFromCollection.splice(index, 1)

      let addToCollection = removeFromCollection === morning ? evening : morning
      addToCollection.unshift(clicked)

      this.setState({morning: morning, evening: evening})
    }

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morning}
            onSwitchPlaylistCallback={onSwitchPlaylist}
          />
          <Playlist
            side="Evening"
            tracks={this.state.evening}
            onSwitchPlaylistCallback={onSwitchPlaylist}
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
