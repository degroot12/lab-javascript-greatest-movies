// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    let mappedDir = arr.map(movie =>{
        return movie.director
    })
    return mappedDir
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    let steveDrama = 0
    let onlySteve = arr.filter(movie =>{
        return movie.director == "Steven Spielberg"
    })
    onlySteve.forEach(movie => {
        if(movie.genre.includes("Drama")){
            steveDrama ++
        }
    })
    return steveDrama
  }
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length === 0){
        return 0
    }
    let noRate = arr.filter(elem =>{
        return elem.rate
    })
    let rating = noRate.reduce((acc, eleme) => {
      return acc += eleme.rate
      
   }, 0)
   return Math.round((rating / arr.length)*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    let sumRate = 0;
    let amountDramaMovies = 0;
    arr.forEach(movie => {
        if(movie.genre.includes("Drama")){
            sumRate += movie.rate;
            amountDramaMovies++;
        }
    })
    if (amountDramaMovies === 0){
        return 0
    }
    return (Math.round((sumRate/amountDramaMovies)*100)/100)
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
let arrClone = JSON.parse(JSON.stringify(arr))

let sortedYear = arrClone.sort(function(a,b){
    if(a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
        return -1;
    }
    else if(a.title > b.title){
        return 1;
    }
    else if(a.title < b.title){
        return -1;
    }
})
return sortedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    const arrClone = JSON.parse(JSON.stringify(arr))
    const onlyTitles = arrClone.map(movie => movie.title)
    const sortedTitle = onlyTitles.sort(function(a,b){
        if(a > b){
            return 1;
        }
        else if(a < b){
            return -1;
        }
    });
    return sortedTitle.slice(0, 20)
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(arr){
    const arrClone = JSON.parse(JSON.stringify(arr))
    arrClone.map(movie => {
        let totalMinutes = 0
        if(movie.duration.length < 4){
          let minute = movie.duration[0];
          totalMinutes += Number(minute)
          movie.duration = totalMinutes *60;
        } else if(movie.duration.length < 7) {
          let minute = movie.duration[0]+movie.duration[1];
          totalMinutes += Number(minute)
          movie.duration = totalMinutes;         
        }else
          {
          const hourSplit = movie.duration.split(' ');
          const fullHourToMinute = hourSplit[0][0] * 60;
          totalMinutes += fullHourToMinute
          const minutes = hourSplit[1].split('');
          if(minutes.length < 5){
            totalMinutes += Number(minutes[0])
        } else {
            const joinedMinutes = minutes[0] + minutes[1];
            totalMinutes += Number(joinedMinutes)
        }
        console.log(totalMinutes)
        movie.duration = totalMinutes
        }

      })
    return arrClone  
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// const {movies} = require('./data')
// dramaMoviesRate(movies);