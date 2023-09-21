import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// https://developer.themoviedb.org/
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (err) {
        console.log(err);
        return err;
    }
}