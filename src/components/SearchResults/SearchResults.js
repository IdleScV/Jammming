import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';


class SearchResults extends React.Component {
    render(){
        return(
            <div className="SearchResults">
                <h2 className="Results">Results</h2>
                {/* 
                Displays tracks,
                Allows for add function to move search result track to playlist,
                Removes songs added to playlist from search results,
                Displays + button.
                 */}
                <TrackList  tracks={this.props.searchResults} 
                            onAdd={this.props.onAdd} 
                            onRemove={this.props.onRemove}
                            isRemoval={false}/>
            </div>
        )
        }
}

export default SearchResults;