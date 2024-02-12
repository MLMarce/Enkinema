const axios = require('axios')

async function getMovies(url) {
    try {
        const { data } = await axios.get(url)
        return data
    } 
    catch(err) {
        console.log(err)
    }
}

module.exports = { getMovies }