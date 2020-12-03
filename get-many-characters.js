const fetch = require('node-fetch')
const charIds = [1, 4, 5]


function getManyCharacters(someArray) {
    return fetch(`https://rickandmortyapi.com/api/character/${someArray}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            return [
                {
                    name: json[0].name,
                    status: json[0].status,
                    species: json[0].species
                },
                {
                    name: json[1].name,
                    status: json[1].status,
                    species: json[1].species
                },
                {
                    name: json[2].name,
                    status: json[2].status,
                    species: json[2].species
                }

            ]
        })




}


getManyCharacters(charIds)

module.exports = getManyCharacters 