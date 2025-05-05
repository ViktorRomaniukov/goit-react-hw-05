import axios from "axios";

export const fetchMovies = async (page, signal) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MwMDE0MmNiNmIwODNhYjg5ZmFiYTU4ZTEwNTc5NSIsIm5iZiI6MS43NDY0MjYzMTIxMjMwMDAxZSs5LCJzdWIiOiI2ODE4NTljODMwZjRlNmE0ZTMwOGE0M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HR98IESBFtoByGW8Bd01fVucu0QF5_uF8vgrDMPUZFQ",
      },
      params: {
        page: page,
      },
      signal,
    }
  );
  return response.data.results;
};

export const fetchMoviesById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MwMDE0MmNiNmIwODNhYjg5ZmFiYTU4ZTEwNTc5NSIsIm5iZiI6MS43NDY0MjYzMTIxMjMwMDAxZSs5LCJzdWIiOiI2ODE4NTljODMwZjRlNmE0ZTMwOGE0M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HR98IESBFtoByGW8Bd01fVucu0QF5_uF8vgrDMPUZFQ",
      },
    }
  );
  return response.data;
};

export const fetchReviewById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MwMDE0MmNiNmIwODNhYjg5ZmFiYTU4ZTEwNTc5NSIsIm5iZiI6MS43NDY0MjYzMTIxMjMwMDAxZSs5LCJzdWIiOiI2ODE4NTljODMwZjRlNmE0ZTMwOGE0M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HR98IESBFtoByGW8Bd01fVucu0QF5_uF8vgrDMPUZFQ",
      },
    }
  );
  return response.data.results;
};

export const fetchCastById = async (movieId) => {
  const response = await axios.get(
    `
https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MwMDE0MmNiNmIwODNhYjg5ZmFiYTU4ZTEwNTc5NSIsIm5iZiI6MS43NDY0MjYzMTIxMjMwMDAxZSs5LCJzdWIiOiI2ODE4NTljODMwZjRlNmE0ZTMwOGE0M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HR98IESBFtoByGW8Bd01fVucu0QF5_uF8vgrDMPUZFQ",
      },
    }
  );
  return response.data.cast;
};

export const fetchSearchMovies = async (query = "", page, signal) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MwMDE0MmNiNmIwODNhYjg5ZmFiYTU4ZTEwNTc5NSIsIm5iZiI6MS43NDY0MjYzMTIxMjMwMDAxZSs5LCJzdWIiOiI2ODE4NTljODMwZjRlNmE0ZTMwOGE0M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HR98IESBFtoByGW8Bd01fVucu0QF5_uF8vgrDMPUZFQ",
      },
      params: { query: query, page: page },
      signal,
    }
  );
  return response.data;
};