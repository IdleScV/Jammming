import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';



class TrackList extends React.Component {
    render(){


        return(
            <div className="TrackList"> 
                {/*
                Collects functions sent from both Playlist.js and SearchResults,
                Sends to Track since both will be displayed similarly. 
                */}
                {this.props.tracks.map(track => {
                        return <Track   track={track} 
                                        key={track.id} 
                                        onAdd={this.props.onAdd} 
                                        onRemove={this.props.onRemove} 
                                        isRemoval={this.props.isRemoval}
                                        tracks = {this.props.tracks}/>
                    })
                }
            
            </div>
        );
    }
}


export default TrackList;
