export const bg_img =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

/*
  username:test123no
  password : Test@123
  website: https://www.themoviedb.org/settings/api
  API DOCS: https://developer.themoviedb.org/docs/getting-started
  */
export const TMDB_API_TOKEN = process.env.REACT_APP_TMDB_API_TOKEN

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTY1NmYwMTc0NGFhNDA3OGVjN2EyODViN2FmYzJlYiIsIm5iZiI6MTcyOTMxNTA0MS44OTQyOTIsInN1YiI6IjY3MTMzZjViNjUwMjQ4YjlkYjYxZDg1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8NzqWDxwwCSzjecDh3LBqrXwXy6DzNe1LRapFomreY",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const LANG_OPTIONS = [
  { key: "en", value: "English" },
  { key: "telugu", value: "Telugu" },
  { key: "hindi", value: "Hindi" },
  { key: "marwari", value: "Marwari" },
  { key: "korean", value: "Korean" },
];
