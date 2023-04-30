import axios from 'axios';

const API_KEY = 'd1811b2bd31504cf17d2bc61b9f3cecc';

export const fetchMovies = async (query: string): Promise<any> => {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
	try {
		const response = await axios.get(url);
		const movies = response.data.results;
		return movies;
	} catch (error) {
		console.error(error);
		return null;
	}
};
