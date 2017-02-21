import React, {Component} from 'react';

export default class AlbumsList extends Component {

    render() {
        return <div>{this.props.artist && this.props.artist.name}</div>
    }
}