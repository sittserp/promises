const fsPromises = require('fs').promises;

async function transformer() {
    try {
        const data = await fsPromises.readFile('./README.md', 'utf-8')
        fsPromises.writeFile('./written.txt', data
            .replace(/[A-Z]/g, '')
            .toUpperCase()
            .split("")
            .reverse()
            .join(""))
        console.log('Done-diddly-do!');
    } catch (err) {
        console.log(err);
    }
}

module.exports = transformer
