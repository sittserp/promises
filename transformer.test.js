const fsPromises = require('fs').promises;
const transformer = require('./transformer')

describe('transformer fn', () => {
    afterEach(() => {
        return fsPromises.rm('./written.txt')
    })

    it('reads a file then removes all capital letters then makes all letters capital then reverses the string', async () => {
        await transformer('./README.md')
        const readCheck = await fsPromises.readFile('./written.txt', 'utf-8')
        expect(readCheck).toEqual('BA SESIMOR #')
    })
})