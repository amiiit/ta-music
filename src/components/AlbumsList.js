import React, {Component, PropTypes as T} from 'react';
import Api from '../Api'
import BoxContainer from './BoxContainer'
import AlbumBox from './AlbumBox'

const PAGE_SIZE = 5;

export default class AlbumsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            pageNumber: 0
        }
    }

    componentDidMount() {
        this.props.artist && this.loadAlbums(this.props.artist)
    }

    componentWillReceiveProps(newProps) {
        if ((!this.props.artist && newProps.artist) || newProps.artist.id !== this.props.artist.id) {
            this.setState({
                pageNumber: 0,
                albums: []
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

    loadAlbums(artist) {
        Api.loadAlbums(artist.id, PAGE_SIZE, this.state.pageNumber)
            .then(albums => {
                this.setState({
                    albums
                })
            })
    }

    render() {
        return (
            <BoxContainer>
                {
                    this.state.albums.map(album => <AlbumBox key={album.id} album={album}/>)
                }
            </BoxContainer>
        )
    }
}