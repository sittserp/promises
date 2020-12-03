const fetch = require('node-fetch')


function getCharacter(someId) {

    fetch(`https://rickandmortyapi.com/api/character/${someId}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            const data = {
                name: json.name,
                status: json.status,
                species: json.species
            }
            console.log(data)
            return data
        })
}

getCharacter(1)

module.exports = getCharacter