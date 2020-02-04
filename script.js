var listElement = document.querySelector("ul");
function fetchItems(url) {
    var request = new XMLHttpRequest();
    request.open('GET',url);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            console.log(request.response);
            const response = request.response.results;
            putFilms(response);
        }
    };
    request.send();
}

function putFilms(response){
    for (let i=0;i<response.length;i++){
        listElement.innerHTML+=`
        <li class="movie-card">
            <div class="position">${i+1}</div>
            <div class="mc-poster">
                <a>
                    <img width="100" height=""
                         src="https://image.tmdb.org/t/p/w500/${response[i].poster_path}">
                </a>
            </div>
            <div class="movie-data">
                <div class="mc-info-container">
                    <div class="mc-title">
                        <a>${response[i].title}</a>
                        ${response[i].release_date.slice(0,4)}
                        <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                    </div>
                    <div class="mc-director">
                        <a href="" title="Francis Ford Coppola">Francis Ford Coppola</a>
                    </div>
                    <div class="mc-cast">
                        <a href="">Marlon Brando</a>,
                        <a href="">Al Pacino</a>,
                        <a href="">James Caan</a>,
                        <a href="">Robert Duvall</a>,
                        <a href="">Diane Keaton</a>,
                        <a href="">John Cazale</a>,
                        <a href="">Talia Shire</a>,
                        <a href="">Richard S. Castellano</a>,
                        ...
                    </div>
                </div>
                <div class="data">
                    <div class="avg-rating">${response[i].vote_average}</div>
                    <div class="rat-count">${response[i].vote_count}<i class="fas fa-user"></i></div>
                </div>
            </div>
        </li>`
    }
}

fetchItems('https://api.themoviedb.org/3/movie/popular?api_key=2bf627be0b1f2f1dc0890d49916bba8d&language=en-US&page=1'
);