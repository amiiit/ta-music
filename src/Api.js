const ROOT_API = 'https://api.spotify.com/v1';

const Api = {
    getArtistSuggestions: (simpleQuery) => {
        return fetch(`${ROOT_API}/search?type=artist&q=${encodeURIComponent(simpleQuery)}`)
            .then(response => response.json())
            .then(response => {
                    return response.artists.items.sort((a, b) => {
                        return b.popularity - a.popularity
                    })
                }
            )
    }
};

export default Api