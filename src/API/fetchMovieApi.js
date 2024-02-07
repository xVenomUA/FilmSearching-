import axios from "axios";

const API_KEY = "14442e634525508afa56f4d2f54c1414";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendDay = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=uk-UA&per_page=10`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByID = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=uk-UA`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInfo = async (id, select) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/${select}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
