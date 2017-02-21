import React, {PropTypes as T} from 'react';
import './artist-box.css';
import Box from './Box'

function ArtistBox({artist, onSelect}) {
    return (
        <Box className='artist-box'>
            <h2>{artist.name}</h2>
            {
                artist.images && artist.images.length && <img role='presentation' src={artist.images[0].url}/>
            }
            <div className='artist-followers'>Followers: {artist.followers.total}</div>
            <a href={artist.external_urls.spotify} target="_blank">Spotify</a>
            <div className='select-artist' onClick={onSelect}>
                +
            </div>
        </Box>
    )
}

ArtistBox.propTypes = {
    artist: T.shape({
        images: T.arrayOf(T.shape({
            url: T.string.isRequired
        }))
    }),
    onSelect: T.func.isRequired
};

export default ArtistBox