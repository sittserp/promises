const fsPromises = require('fs').promises;
const copier = require('./copier')

describe('copier fn', () => {
    afterEach(() => {
        return fsPromises.rm('./written.txt')
    })

    it('reads a file and writes it to a newly created file', async () => {
        await copier('./README.md')
        const readCheck = await fsPromises.readFile('./written.txt', 'utf-8')
        expect(readCheck).toEqual('# Promises Lab')
    })
})