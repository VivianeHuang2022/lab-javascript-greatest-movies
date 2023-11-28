// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}


/*

Function "howManyMovies"
should be declared
should return a number
should return 0 if the array is empty
should return 0 if none of the movies in the array were directed by Steven Spielberg
should only count drama movies
should return 2 if there are only 2 Steven Spielberg movies
should return 4 when called with the array of movies exported from "data.js"

*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length == 0){
        return 0;
    }
    const spielbergDramas = moviesArray.filter(movie => 
        movie.director ==='Steven Spielberg' && movie.genre.includes('Drama')
        );

    // Return the count of these movies
    return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

        // Calculate the total score, accounting for movies without a score
        const totalScore = moviesArray.reduce((accumulator, movie) => {
            return accumulator + (movie.score || 0);
        }, 0);
    
        // Calculate the average score
        const averageScore = totalScore / moviesArray.length;
    
        // Return the average, rounded to two decimal places
        return Number(averageScore.toFixed(2));



}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
