import React, {Component} from 'react';
import './App.css';
import Api from './Api';
import ArtistBox from './ArtistBox';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: '',
            artistsSuggestions: []
        }
    }

    componentDidMount(){
        this.inputRef.focus()
    }

    handleSearchInputChange = e => {
        this.setState({
            searchInputValue: e.target.value
        })
    };

    handleSearchClick = () => {
        this.searchForArtist(this.state.searchInputValue)
    };

    searchForArtist = (query) => {
        return Api.getArtistSuggestions(query)
            .then(this.setNewArtistsSuggestions)
    };

    setNewArtistsSuggestions = (suggestions) => {
        this.setState({
            artistsSuggestions: suggestions
        })
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>TA Music</h2>
                </div>
                <div className='artist-search'>
                    <input value={this.state.searchInputValue}
                           onChange={this.handleSearchInputChange}
                           ref={ref => {this.inputRef = ref}}
                    />
                    <button onClick={this.handleSearchClick}>Go</button>
                </div>
                <div className='artists-suggestions box-container'>
                    {
                        this.state.artistsSuggestions.map(artist => (
                            <ArtistBox artist={artist}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
