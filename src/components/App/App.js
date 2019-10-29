import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
		// Sets state for neccessary states
		searchResults: [],
		playlistName: 'My Playlist',
		playlistTracks: [],
		term: ''
		};
	// Binds functions for state changes.
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  	}
	// Adds track to the end of the playlistTracks array
  	addTrack(track) {
		const addingTrack = (track) => this.setState({playlistTracks: [...this.state.playlistTracks, track]});
		addingTrack(track);
		this.removeTrack(track, false);
	}
	// Setup to remove track from playlist and results while adding track back to searchresults and playlist on change through Collect ID
	removeTrack(track, removePlaylist) {
		if(removePlaylist) {
			const ids = this.collectIds(true);
			let trackIndex = -1;
			for(let i = 0; i < ids.length; i++) {
				if (ids[i] === track.id) {
					trackIndex = i;
				}
			}
			if (trackIndex !== -1) {
				const newPlaylist = this.state.playlistTracks;
				newPlaylist.splice(trackIndex, 1);
				this.setState({playlistTracks: newPlaylist});
				this.search(this.state.term);
			}
		} else {
			const ids = this.collectIds(false);
			let trackIndex = -1;
			for(let i = 0; i < ids.length; i++) {
				if (ids[i] === track.id) {
					trackIndex = i;
				}
			}
			if (trackIndex !== -1) {
				const newResults = this.state.searchResults;
				newResults.splice(trackIndex, 1);
				this.setState({searchResults: newResults});
			}
		}
		
	}
	// Collect Ids for both Playlist and SearchResults
	collectIds(removePlaylist) {
		let ids = [];
		if(removePlaylist) {
			this.state.playlistTracks.map(track => ids.push(track.id));
		} else {
			this.state.searchResults.map(track => ids.push(track.id));
		}
		return ids;
	}

	// For playlist name to update, sends function to playlist.js
	updatePlaylistName(name) {
		this.setState({playlistName: name});
	}
	// set to save playlist by collecting track uris to an array.
	savePlaylist() {
		let trackURIs = [];
		for(let i = 0; i < this.state.playlistTracks.length; i++) {
			trackURIs.push(this.state.playlistTracks[i].uri);
		}
		Spotify.savePlaylist(this.state.playlistName, trackURIs);
		this.setState({playlistName: 'New Playlist', playlistTracks: []});
	}
	// dat means dat... u can ... u can... it means dat u can ... u can play music... but only, sometimes... 
	async search(term) {
		const results = await Spotify.search(term);
		this.setState({searchResults: results});
		const resultIds = this.collectIds(false);
		const playlistIds = this.collectIds(true);
		let indexes = [];
		for(let i = 0; i < resultIds.length; i++) {
			for(let j = 0; j < playlistIds.length; j++) {
				if (resultIds[i] === playlistIds[j]) {
					indexes.push(i);
				}
			}
		}
		if(indexes.length > 0) {
			for (let k = 0; k < indexes.length; k++) {
				results.splice(indexes[k], 1);
			}
		}
		this.setState({searchResults: results});
		this.setState({term: term});
	}
// dis means that... dat it will put raindeers on the screen. 
	render(){ // see it says raindeer right here
		return (
		<div> {/*^ this says that i will let u return the raindeers to the pole */}
			<h1>Ja<span className="highlight">mmm</span>ing</h1>
			<h1 className="Description">Make Your Spotify Playlist</h1>
			<div className="App">
			<SearchBar onSearch={this.search}/>
			<div className="App-playlist">
			<SearchResults  searchResults={this.state.searchResults} 
							onAdd={this.addTrack}
							onRemove={this.removeTrack} />
			<Playlist       playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}/> 
			</div> 
			</div>
		</div>
		);
	}
}

export default App;
