const fs = require("fs");
const path = require("path");


let files = fs.readdirSync(__dirname)
files.forEach(file => {
    if (file != "clear.js" && file != "package.json") {
        const ext = path.extname(file).slice(1);
        if(fs.existsSync(ext)){
            fs.renameSync(file,`./${ext}/${file}`);
        }
        else{
            fs.mkdirSync(ext);
            fs.renameSync(file,`./${ext}/${file}`);
        }
    }
});




