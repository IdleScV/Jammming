import React from 'react';
import './Track.css';

class Track extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentlyPlaying:[]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderPreviewIcon = this.renderPreviewIcon.bind(this);
  }
  // Button Functions
  renderAction(){
    if (this.props.isRemoval){
      return <button className="Track-action" onClick={this.removeTrack}>-</button>
    } else {
      return <button className="Track-action" onClick={this.addTrack}>+</button>
    }
  }
    addTrack(track){
      this.props.onAdd(this.props.track);
    }
    removeTrack(track){
      this.props.onRemove(this.props.track, true);
    }

  // Shows Track Preview
  renderPreviewIcon() {
    if(!this.props.track.preview) {
      return <p className="Track-preview-unavailable"> No <br/> Preview <br /> Available </p>;
    } else {
      return <audio controls src={this.props.track.preview} />;
    }
  }

  render() {
    return(

          <div className="Track" key={this.props.track.id}>
              {/* Displays album cover + track preview*/}
              <div className="Track-cover-preview">
                  <div className="Track-preview-container">
                      <img className="Track-album-cover" src={this.props.track.cover} alt="album cover" />
                      {this.renderPreviewIcon()}
                  </div>
              </div>
              {/* Diplays track information */}
              <div className="Track-information">
                  <h3>{this.props.track.name}</h3>
                  <p>{this.props.track.artist} | {this.props.track.album}</p>                  
              </div>
                {this.renderAction()}
          </div>
            
              

    );
  }
}


export default Track;






