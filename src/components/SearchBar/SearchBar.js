import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };

        // Binds state changes
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    // Uses Search function built in Spotify.js with our 'term' state
    search(){
        this.props.onSearch(this.state.term);
    }

    // Handles changes in the search bar, setting value for term.
    handleTermChange(event){
        this.setState({term: event.target.value});
    }


    // allows 'Enter' key to be 'Search' button alternative
    handleKeyPress(event){
        if (event.which === 13){
            document.getElementsByClassName("SearchButton")[0].click();
        }    
    }

    render(){
        return(
            <div className="SearchBar">
                {/*
                Placeholder => text to appear in input bar
                onChange => changes state of 'term'
                onKeyPress => used for the 'Enter' key
                onClick => uses Search function 
                 */}
                <input  placeholder="Enter A Song, Album, or Artist" 
                        onChange={this.handleTermChange} 
                        onKeyPress={this.handleKeyPress}/>
                <button className="SearchButton"   
                        onClick={this.search}> 
                    SEARCH
                </button>
            </div>

        );
    }
}

export default SearchBar;