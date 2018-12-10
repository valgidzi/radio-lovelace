import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';



const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  const playlists = {
    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  };

  const onSwitchPlaylist = (removed, side) => {
    console.log(`From RadioSet result: ${removed}`)
    console.log(removed);
    console.log(side);
    console.log(playlists.morningTracks);
    console.log(playlists.eveningTracks);
    if (side === "Morning") {
      playlists.eveningTracks.push(removed)
    } else {
      playlists.morningTracks.push(removed)
    }
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
};

export default RadioSet;
