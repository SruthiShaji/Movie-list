const apikey='api_key=902ddd650dd51f569c2ef95468612ad1';
const base='https://api.themoviedb.org/3';
const popularity='/discover/movie?sort_by=popularity.desc&';

function get(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        show(data.results);
    })
}
const picture='https://image.tmdb.org/t/p/w500';
const section = document.getElementById('third');

function show(data) {
    data.forEach(movie => {
        const {title,poster_path ,vote_average}=movie;
        const list = document.createElement('div');
        list.classList.add('movie');
        list.innerHTML = `
            <img src="${picture+poster_path}" alt="${title}" width="300px" height="300px">
            <div class="movie-details">
                <h1 style="width: auto;font-size:15px;line-height:1px;"><b>${title}</b></h1>
                <h3 style="color:yellow; text-align:right;background-color:rgba(255, 255, 255, 0.5); width:30px;"><b>${vote_average}</b></h3>
            </div>
        `
        section.appendChild(list);
    })
}

get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=902ddd650dd51f569c2ef95468612ad1')

