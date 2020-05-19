const path = require('path')
const fs = require('fs')

function changeFiles(folder1, folder2){
    const fromFolder1Path = path.join(__dirname, folder1);
    const fromFolder2Path = path.join(__dirname, folder2);

    // console.log(toFolderPath)
    fs.readdir(fromFolder1Path,(err, arr1) => {
            // console.log(file);
            arr1.forEach(el => {
                const fromFilePath = path.join(__dirname, folder1, el)
                const toFilePath = path.join(__dirname, folder2, el)
                // console.log(el);
                fs.rename(fromFilePath,toFilePath,err => {
                    console.log(!err ? `moved: ${el}`: err)
                } )
            })
    });
    // повторюється код і я щось туплю не шарю як по іншому зробити((
    fs.readdir(fromFolder2Path,(err, arr2) => {
        // console.log(file);
        arr2.forEach(el => {
            const fromFile2Path = path.join(__dirname, folder2, el)
            const toFile1Path = path.join(__dirname, folder1, el)
            // console.log(el);
            fs.rename(fromFile2Path,toFile1Path,err => {
                console.log(!err ? `moved: ${el}`: err)
            } )
        })
    });

}

changeFiles("2000", "1800")

