import React from 'react';
import Box from './Box'

const AlbumBox = ({album}) => {
    return (
        <Box>
            <p>{album.name}</p>
            {
                album.images && album.images.length && <img role='presentation' src={album.images[0].url}/>
            }
            <a href={album.external_urls.spotify} target="_blank">Spotify</a>
        </Box>
    )
};

export default AlbumBox