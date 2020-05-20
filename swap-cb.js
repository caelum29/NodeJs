const fs = require('fs')
const path = require('path')

function swap (folderOne, folderTwo) {
    const directoryOne = path.join(__dirname, folderOne);
    const directoryTwo = path.join(__dirname, folderTwo);
    const directorySwap = path.join(__dirname, 'swap-folder');
    createDirectory(directorySwap)
        .then(()=> copyFile(directoryOne, directorySwap))
        .then(()=> copyFile(directoryTwo, directoryOne))
        .then(()=> copyFile(directorySwap, directoryTwo))
        .then(()=> deleteDirectory(directorySwap))
        .catch(err => console.log(err))
}

const createDirectory = (directorySwap) =>
    new Promise((resolve, reject) => {
        fs.mkdir(directorySwap, err => {
            if (err) reject(err)
            resolve()
        })
    });
const deleteDirectory = (directorySwap) =>
    new Promise((resolve, reject) => {
        fs.rmdir(directorySwap, err => {
            if (err) reject(err)
            resolve()
        })
    });
const copyFile = (directoryOne, directoryTwo) => {
  new Promise((resolve, reject) => {
      fs.readdir(directoryOne,((err, files) => {
          // console.log(files);
          if (err) reject(err);
          resolve(files)
      }))
  }).then(files => new Promise((resolve, reject) => {
      for (const file of files) {
          fs.rename(
              path.join(directoryOne, file),
              path.join(directoryTwo, file),
              err => {
                  if (err) reject(err)
              }
          )
      }
      resolve()
  }))
};
swap('1800', '2000');
