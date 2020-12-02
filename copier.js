const fsPromises = require('fs').promises;

async function copier() {
    try {
        const data = await fsPromises.readFile('./README.md', 'utf-8');
        fsPromises.writeFile('./written.txt', data)
        console.log('Done-diddly-do!');
    } catch (err) {
        console.log(err);
    }
}

module.exports = copier
