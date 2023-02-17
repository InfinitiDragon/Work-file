const fs = require('fs')
    function readAndPrintFileContent(filePath){
        fs.readFile(filePath, 'utf8' , (err , data) => {
            if (err) console.log(err);
            else console.log(data);
        })
    }

    readAndPrintFileContent('text.txt')