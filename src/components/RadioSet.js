import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';



const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  const playlists = {
    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
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
};

export default RadioSet;
