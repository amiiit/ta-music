import React, {Component, PropTypes as T} from 'react';
import Api from '../Api'
import BoxContainer from './BoxContainer'
import AlbumBox from './AlbumBox'
import {List} from 'immutable';

const PAGE_SIZE = 5;

export default class AlbumsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: new List(),
            pageNumber: 0,
            total: 0
        }
    }

    componentDidMount() {
        this.props.artist && this.loadAlbums(this.props.artist)
    }

    componentWillReceiveProps(newProps) {
        if ((!this.props.artist && newProps.artist) || newProps.artist.id !== this.props.artist.id) {
            this.setState({
                pageNumber: 0,
                albums: new List()
            }, () => {
                this.loadAlbums(newProps.artist)
            });
        }
    }

    static propTypes = {
        artist: T.shape({
            id: T.string.isRequired
        })
    };

    loadAlbums = (artist) => {
        Api.loadAlbums(artist.id, PAGE_SIZE, this.state.pageNumber)
            .then(albumsForArtist => {
                this.setState({
                    albums: this.state.albums.concat(albumsForArtist.albums),
                    total: albumsForArtist.total
                })
            })
    };

    handleLoadMoreAlbums = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        }, () => {
            this.loadAlbums(this.props.artist)
        })
    };

    render() {
        return (
            <BoxContainer>
                {
                    this.state.albums.map(album => <AlbumBox key={album.id} album={album}/>)
                }
                {
                    this.state.total > PAGE_SIZE * (this.state.pageNumber + 1) && (
                        <div className='load-more-albums'
                             onClick={this.handleLoadMoreAlbums}>...</div>
                    )
                }
            </BoxContainer>
        )
    }
}