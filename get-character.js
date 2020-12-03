const fetch = require('node-fetch')


async function getCharacter(someId) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${someId}`)
    const json = await res.json()
    return {
        name: json.name,
        status: json.status,
        species: json.species
    }
}


getCharacter(1)

module.exports = getCharacter 