import React from 'react';
import './Playlist.css'
import TrackList from "../TrackList/TrackList"


class Playlist extends React.Component {
    constructor(props){
        super(props);
        // bind the value of changes in the playlist's name
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    // Handles the input field of the playlist name
    handleNameChange(event){
        this.props.onNameChange(event.target.value)
    }

    render(){
        return (
            <div className="Playlist">
                {/* 
                onChange event listener set handleNameChange,
                Shows tracks in the playlistTracks array,
                onRemove allows tracks to be removed.
                isRemoval sets to shows a '-' button in Tracks.js.
                onClick saves playlist through Spotify.js .
                */}
                <input      placeholder="New Playlist" 
                            onChange={this.handleNameChange}/>
                <TrackList  tracks={this.props.playlistTracks} 
                            onRemove={this.props.onRemove} 
                            isRemoval={true}/>
                <button     className="Playlist-save" 
                            onClick={this.props.onSave}>
                    SAVE TO SPOTIFY
                </button>
            </div>
        )
    }
}

export default Playlist;