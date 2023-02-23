
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }


}

start();


let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function remeberMyFimls() {

    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?');
        const b = prompt('На сколько оцените его?');

        if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');

        } else {
            console.log('error');
            i--;
        }

    }
}
remeberMyFimls();

let i = 0;
while (i < 1) {
    const a = prompt('Один из последних просмотренных фильмов?');
    const b = prompt('На сколько оцените его?');
    if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    } break;

}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Sho');
    } else if (personalMovieDB.count > 10 && personalMovieDB <= 30) {
        console.log('idi nahuy');
    } else if (personalMovieDB > 30) {
        console.log('Da nu nahuy?');
    } else {
        console.log('pizda');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимий жанр під номером${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}
writeYourGenres();






