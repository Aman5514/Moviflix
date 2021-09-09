const API_KEY = 'api-key';


const requests = 
{
    fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
    fetchPopular: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=2`,
    fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
    fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAdventure: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=3`,
    fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

}

export default requests;
