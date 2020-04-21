const fs = require("fs-extra").promises;
var argv = process.argv[2];

( async () => {
    var dir =".";
    if(argv) dir = argv;

    const files = await fs.readdir(dir);

    for(file of files) console.log(file);
})().catch((e) => console.log(e));