import React from 'react';

function ArtistBox({artist}) {
    return (
        <div className='artist-box box'>
            <h2>{artist.name}</h2>
            {
                artist.images && <img src={artist.images[0].url}/>
            }
            <div className='artist-followers'>Followers: {artist.followers.total}</div>
            <a href={artist.external_urls.spotify} target="_blank">Spotify</a>
        </div>
    )
}

export default ArtistBox