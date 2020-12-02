const fsPromises = require('fs').promises;

// fsPromises.readFile('./README.md', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// async function reader() {
//     try {
//         const data = await fsPromises.readFile('./README.md', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// reader()

// async function writer() {
//     try {
//         await fsPromises.writeFile('./written.txt', 'This has been written')
//         console.log('DONE!');
//     } catch (err) {
//         console.log(err);
//     }
// }

// writer()

async function copier() {
    try {
        const data = await fsPromises.readFile('./README.md', 'utf-8');
        fsPromises.writeFile('./written.txt', data)
        console.log('Done-diddly-do!');
    } catch (err) {
        console.log(err);
    }
}

copier()
