const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MoviesBox = document.getElementById("movie-box");

const GetMovies = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    ShowMovies(data.results);
  } catch (error) {
    console.log("Error:", error);
  }
};

const ShowMovies = (data) => {
  MoviesBox.innerHTML = "";
  data.forEach((item) => {
    console.log(item);
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `<img src="${IMGPATH + item.poster_path}" alt="img1" />
    <div class="overley" id="over">
      <div class="title">
        <h2>${item.title}</h2>
        <span>Rating : ${Math.round(item.vote_average)} </span>
      </div>
      <br>
      <h3>${item.overview}</h3>
    </div>`;
    MoviesBox.appendChild(div);
  });
};

document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
    if (event.target.value != "") {
      GetMovies(SEARCHAPI + event.target.value);
    } else {
      GetMovies(APIURL);
    }
  });

GetMovies(APIURL);
