const fetch = require('node-fetch')


function getCharacter(someId) {
    return fetch(`https://rickandmortyapi.com/api/character/${someId}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            return {
                name: json.name,
                status: json.status,
                species: json.species
            }
        })

}

getCharacter(1)

module.exports = getCharacter 