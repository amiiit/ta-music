import React from 'react';

function ArtistBox({artist}) {
    return (
        <div className='artist-box box'>
            <h2>{artist.name} - {artist.popularity}</h2>
        </div>
    )
}

export default ArtistBox