const fetch = require('node-fetch')
const getManyCharacters = require('./get-many-characters')
const charIds = [1, 4, 5]

describe('getManyCharacters fn', () => {
    it('fetches characters from the Futurama API', async () => {
        const fetchedCharacter = await getManyCharacters(charIds)
        expect(fetchedCharacter)
            .toEqual([{
                name: expect.any(String),
                status: expect.any(String),
                species: expect.any(String)
            },
            {
                name: expect.any(String),
                status: expect.any(String),
                species: expect.any(String)
            },
            {
                name: expect.any(String),
                status: expect.any(String),
                species: expect.any(String)
            }])
    })
})