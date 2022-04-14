const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    // fs.readdir(rootDir)
    //     .then((files) => {
    //         console.log(files);
    //     })
    //     .catch((error) => {
    //         console.log('error = ', error);
    //     });
    // console.log('files = ', files);
    walk(rootDir, files);
}
async function walk(rootDir, files) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        // console.log(fileFullPath, stats.isDirectory());
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        if (!/\.css/g.test(fileFullPath)) continue;
        console.log(fileFullPath);
    }
}

readdir('../../');