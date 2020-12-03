const fetch = require('node-fetch')
const getCharacter = require('./get-character')

describe('getCharacter fn', () => {
    it('fetches characters from the Futurama API', async () => {
        const fetchedCharacter = await getCharacter(1)
        expect(fetchedCharacter)
            .toEqual({
                name: expect.any(String),
                status: expect.any(String),
                species: expect.any(String)
            })
    })
})