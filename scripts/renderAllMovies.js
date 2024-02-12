
// const { getMovies } = require('./getMovies')
const { createMovieCard } = require('./createMovieCard')
const tempData = require('./tempData')


// const url = 'https://students-api.2.us-1.fl0.io/movies' 


const sectionMovies = document.getElementById('allMovies')

function renderAllMovies() {
    // const allMovies = await getMovies(url)
    const cardsMovie =  tempData.map((movie) => 
        createMovieCard(movie))

    cardsMovie.forEach(element => {
        sectionMovies.appendChild(element)
    });
}

module.exports = {renderAllMovies}