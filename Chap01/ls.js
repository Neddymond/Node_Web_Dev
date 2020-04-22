const fs = require("fs");
const util = require("util");
// const fs_readDir = util.promisify(fs.readdir);

const fs_readDir = dir => {
    return new Promise((resolve , reject) => {
        fs.readdir(dir, (err, fileList) => {
            if(err) reject(err);
            else resolve(fileList);
        });
    });
}

const argv = process.argv[2];

(async () => {
    var dir = ".";
    if(argv) dir = argv;

    const files = await fs_readDir(dir);

    for (const fn of files) {
        console.log(fn);
    }
})().catch((e) => console.log(e));