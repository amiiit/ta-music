import React, {Component} from 'react';
import './App.css';
import Api from './Api';
import ArtistBox from './components/ArtistBox';
import AlbumsList from './components/AlbumsList'
import BoxContainer from './components/BoxContainer';

const MAX_ARTISTS_DISPLAYED = 5;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: '',
            artistsSuggestions: []
        }
    }

    componentDidMount() {
        this.inputRef.focus()
    }

    handleSearchInputChange = e => {
        this.setState({
            searchInputValue: e.target.value
        })
    };

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.searchForArtist(this.state.searchInputValue);
    };

    handleArtistSelected(artist) {
        this.setState({
            selectedArtist: artist
        })
    }

    searchForArtist = (query) => {
        return Api.getArtistSuggestions(query)
            .then(this.setNewArtistsSuggestions)
    };

    setNewArtistsSuggestions = (suggestions) => {
        this.setState({
            artistsSuggestions: suggestions.slice(0, MAX_ARTISTS_DISPLAYED)
        })
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>TA Music</h2>
                </div>
                <div className='artist-search'>
                    <form onSubmit={this.handleSearchSubmit}>
                        <input value={this.state.searchInputValue}
                               onChange={this.handleSearchInputChange}
                               ref={ref => {
                                   this.inputRef = ref
                               }}
                        />
                        <button type='submit'>Go</button>
                    </form>
                </div>
                <div className='artists-suggestions box-container'>
                    <BoxContainer>
                        {
                            this.state.artistsSuggestions.map(artist => (
                                <ArtistBox key={artist.id}
                                           artist={artist}
                                           onSelect={() => {
                                               this.handleArtistSelected(artist)
                                           }}
                                />
                            ))
                        }
                    </BoxContainer>

                </div>
                <div className='selected-artist-section'>
                    {this.state.selectedArtist && <AlbumsList artist={this.state.selectedArtist}/>}
                </div>
            </div>
        );
    }
}

export default App;
