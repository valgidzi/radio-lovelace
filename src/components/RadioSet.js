import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.tracks,
      side: this.props.side
    }
  }
  render() {
    console.log(`Radio set for ${this.props.tracks.length} tracks`);
    const playlists = {
      morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
      eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
    };

    const onSwitchPlaylist = (trackId, side) => {
      let removeFromCollection = side === "Morning" ? playlists.morningTracks : playlists.eveningTracks
      console.log(playlists.morningTracks);
      console.log(playlists.eveningTracks);
      let clicked = removeFromCollection.find(track => track.id === trackId)
      let index = removeFromCollection.indexOf(clicked)
      console.log(index);
      removeFromCollection.splice(index, 1)
      let addToCollection = removeFromCollection === playlists.morningTracks ? playlists.eveningTracks : playlists.morningTracks
      addToCollection.push(clicked)
      console.log(playlists.morningTracks);
      console.log(playlists.eveningTracks);
    }

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
            onSwitchPlaylistCallback={onSwitchPlaylist}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            onSwitchPlaylistCallback={onSwitchPlaylist}
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
